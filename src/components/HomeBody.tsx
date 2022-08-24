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
        const sortedBooks = bookList.sort((a, b) => a.sale - b.sale);
        setBooks(sortedBooks);
      }
    };

    fetchBooksFromAPI();
  }, []);
  return (
    <div className={bodyStyle.homeBody}>
      {books ? (
        <>
          <Row>
            <Col span={18} offset={3}>
              <div className={bodyStyle.sectionHeader}>
                <h4 style={{ fontSize: "18px", margin: "0px" }}>
                  সর্বাধিক বিক্রিত বইসমূহ
                </h4>
              </div>
            </Col>
          </Row>
          <Items books={books} />
          <Row>
            <Col span={18} offset={3}>
              <div className={bodyStyle.sectionHeader}>
                <h4 style={{ fontSize: "18px", margin: "0px" }}>
                  আমাদের সকল বইসমূহ
                </h4>
              </div>
            </Col>
          </Row>
          <Items books={books} />
          <Items books={books} />
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
