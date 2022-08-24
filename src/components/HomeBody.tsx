import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import bodyStyle from "./homeBody.module.css";
import Items from "./Items";
import { Book } from "../../lib/types";
import { useApollo } from "../../lib/apollo-client";
import { getAllBooks } from "../../lib/hasura_query";

function HomeBody() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooksFromAPI = async () => {
      const client = useApollo(undefined);
      const res = await client.query({
        query: getAllBooks(),
      });
      setBooks(res.data);
    };

    fetchBooksFromAPI();
  }, []);

  return (
    <div className={bodyStyle.homeBody}>
      <Row>
        <Col span={18} offset={3}>
          <div className={bodyStyle.sectionHeader}>
            <h4 style={{ fontSize: "18px", margin: "0px" }}>
              সর্বাধিক বিক্রিত বইসমূহ
            </h4>
          </div>
        </Col>
      </Row>
      <Items />
      <Row>
        <Col span={18} offset={3}>
          <div className={bodyStyle.sectionHeader}>
            <h4 style={{ fontSize: "18px", margin: "0px" }}>
              আমাদের সকল বইসমূহ
            </h4>
          </div>
        </Col>
      </Row>
      <Items />
      <Items />
    </div>
  );
}

export default HomeBody;
