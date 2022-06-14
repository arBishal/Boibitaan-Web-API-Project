import { gql } from "@apollo/client";

export const findUserByEmail = (
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
