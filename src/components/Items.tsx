import React from "react";
import { Row, Col } from "antd";
import ItemCard from "./ItemCard";
import { Book } from "../../lib/types";

const Items = ({ books = [] }: { books: Book[] }) => {
  const rowComponenet = books.map((book, id) => (
    <Col span={3} offset={id === 0 ? 3 : 0}>
      <ItemCard
        id={book.id}
        image={process.env.NEXT_PUBLIC_FIREBASE_STORAGE_PREFIX + book.image}
        name={book.name}
        author={book.author}
        price={book.price}
      />
    </Col>
  ));
  return (
    <div style={{ marginTop: "25px" }}>
      <Row gutter={[16, 16]}>{rowComponenet}</Row>
    </div>
  );
};

export default Items;
