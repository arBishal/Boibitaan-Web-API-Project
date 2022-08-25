import { gql } from "@apollo/client";

export const upsertUserByEmail = (
  email: string,
  name: string,
  passHash: string,
  phone: string
) => {
  return gql`
    mutation MyMutation {
      insert_user(
        objects: { email: "${email}", name: "${name}", passHash: "${passHash}", phone: "${phone}" }
        on_conflict: { constraint: user_email_key }
        ) {
          affected_rows
        }
      }
      `;
};

export const checkAccountWithEmailPassHash = (
  email: string,
  passHash: string
) => {
  return gql`
    query MyQuery {
      user(
        where: {
          email: { _eq: "${email}" }
          passHash: { _eq: "${passHash}" }
        }
      ) {
        id
        name
        phone
        email
      }
    }
  `;
};

export const getAllBooks = () => {
  return gql`
    query MyQuery {
      books {
        id
        name
        author
        price
        image
        sale
        category
        publisher
        quantity
        supplier
      }
    }
  `;
};

export const getBookById = (id: string) => {
  return gql`
    query MyQuery {
      books_by_pk(id: ${id}) {
        id
        image
        name
        price
        publisher
        quantity
        sale
        supplier
        description
        category
        author
      }
    }
  `;
};

export const getAllBookId = () => {
  return gql`
    query MyQuery {
      books {
        id
      }
    }
  `;
};
