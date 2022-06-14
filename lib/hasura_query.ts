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
