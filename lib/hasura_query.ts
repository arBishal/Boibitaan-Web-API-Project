import { gql } from "@apollo/client";
import { User } from "./types";

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

export const getUserDetails = () => {
  return gql`
    query MyQuery {
      user {
        address
        accountNumber
        created_at
        email
        id
        name
        phone
      }
    }
  `;
};

export const updateUserInfo = ({
  id,
  name,
  phone,
  accountNumber,
  address,
  email,
}: User) => {
  return gql`
    mutation MyMutation {
      update_user(
        _set: {
          address: "${address}"
          name: "${name}"
          phone: "${phone}"
          email: "${email}"
          accountNumber: ${accountNumber}
        }
        where: { id: { _eq: ${id} } }
      ) {
        affected_rows
        returning {
          accountNumber
          address
          created_at
          email
          id
          name
          phone
        }
      }
    }
  `;
};

export const getUserSecrets = (id: number) => {
  return gql`
    query MyQuery {
      user(where: { id: { _eq: ${id} } }) {
        accountNumber
        passHash
        secretKey
      }
    }
  `;
};
