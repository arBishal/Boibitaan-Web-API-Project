import React from "react";
import ProductBody from "../../src/components/ProductBody";
import Page from "../../src/components/page";
import client from "../../lib/apollo-client";
import { getAllBookId, getBookById } from "../../lib/hasura_query";
import { Book } from "../../lib/types";

export async function getStaticPaths() {
  const res = await client.query({
    query: getAllBookId(),
  });
  const bookIds = res.data.books;
  return {
    paths: bookIds.map(({ id }: { id: string }) => {
      return {
        params: { id: id.toString() },
      };
    }),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await client.query({
    query: getBookById(params.id),
  });
  return { props: { book: res.data.books_by_pk } };
}

const Product = ({ book }: { book: Book }) => {
  return (
    <Page title={book.name}>
      <ProductBody book={book} />
    </Page>
  );
};

export default Product;
