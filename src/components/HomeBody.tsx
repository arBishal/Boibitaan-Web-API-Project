import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import bodyStyle from "./homeBody.module.css";
import Items from "./Items";
import { Book } from "../../lib/types";
import { useApollo } from "../../lib/apollo-client";
import { getAllBooks } from "../../lib/hasura_query";
import Loading from "./Loading";

import authStyle from "../../styles/auth.module.css";

function HomeBody() {
  const [books, setBooks] = useState<Book[]>();

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
          <Row>
            <Col span={18} offset={3}>
              <div className={bodyStyle.sectionHeader}>
                <h4 style={{ fontSize: "18px", margin: "0px 0px 0px 5px" }}>
                  সর্বাধিক বিক্রিত বইসমূহ
                </h4>
              </div>
            </Col>
          </Row>
          <Items books={rows[0]} />
          <Row>
            <Col span={18} offset={3}>
              <div className={bodyStyle.sectionHeader}>
                <h4 style={{ fontSize: "18px", margin: "0px 0px 0px 5px" }}>
                  আমাদের সকল বইসমূহ
                </h4>
              </div>
            </Col>
          </Row>
          {rows.map((row) => (
            <Items books={row} />
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
