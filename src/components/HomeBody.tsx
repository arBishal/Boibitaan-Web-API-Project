import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import bodyStyle from "./homeBody.module.css";
import Items from "./Items";
import { Book } from "../../lib/types";
import { useApollo } from "../../lib/apollo-client";
import { getAllBooks } from "../../lib/hasura_query";
import Loading from "./Loading";
import SetupModal from "./modals/SetupModal";

import authStyle from "../../styles/auth.module.css";
import Carousel from "../ui-base-components/Carousel";
import { useSession } from "next-auth/react";

function HomeBody() {
  const [books, setBooks] = useState<Book[]>();
  const [newUser, setNewUser] = useState<boolean>(false);

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      const { token } = session;
      const checkSecret = async () => {
        const res = await fetch("/api/checkSecret", {
          method: "POST",
          body: JSON.stringify({ token }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const { needUpdate } = await res.json();
        if (needUpdate) {
          setNewUser(true);
        }
      };

      checkSecret();
    }
  }, [status]);
  useEffect(() => {
    const fetchBooksFromAPI = async () => {
      const client = useApollo(undefined);
      const res = await client.query({
        query: getAllBooks(),
      });
      const data: { books: Book[] } = res.data;
      if (data) {
        const bookList = [...data.books];
        const sortedBooks = bookList.sort((a, b) => b.sale - a.sale);
        setBooks(sortedBooks);
      }
    };

    fetchBooksFromAPI();
  }, []);

  const rows: Book[][] = [];
  if (books) {
    let tempArray: Book[] = [];
    books.forEach((book, index) => {
      tempArray.push(book);
      if (index % 6 == 5) {
        rows.push(tempArray);
        tempArray = [];
      }
    });
    if (tempArray.length) {
      rows.push(tempArray);
    }
  }

  return (
    <div className={bodyStyle.homeBody}>
      {rows.length ? (
        <>
          <SetupModal open={newUser} setOpen={setNewUser} />
          <Row>
            <Col span={18} offset={3}>
              <div style={{ marginTop: "25px" }}>
                <Carousel></Carousel>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={18} offset={3}>
              <div className={bodyStyle.sectionHeader}>
                <h4 style={{ fontSize: "18px", margin: "0px 0px 0px 5px" }}>
                  সর্বাধিক বিক্রিত বইসমূহ
                </h4>
              </div>
            </Col>
          </Row>
          <Items id={1} books={rows[0]} />
          <Row>
            <Col span={18} offset={3}>
              <div className={bodyStyle.sectionHeader}>
                <h4 style={{ fontSize: "18px", margin: "0px 0px 0px 5px" }}>
                  আমাদের সকল বইসমূহ
                </h4>
              </div>
            </Col>
          </Row>
          {rows.map((row, id) => (
            <Items id={id} books={row} />
          ))}
        </>
      ) : (
        <div className={authStyle.authPage}>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default HomeBody;
