import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_DB_ENDPOINT,
  headers: {
    //@ts-ignore
    ["x-hasura-admin-secret"]: process.env.DB_ADMIN_SECRET,
  },
  cache: new InMemoryCache(),
});

export const useApollo = () => {
  const token =
    typeof window === "undefined" ? "" : localStorage.getItem("token");
  const headers = {
    authorization: token
      ? `Bearer ${token}`
      : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYW5vbnltb3VzIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImFub255bW91cyJ9fQ.oWo2mjTNc0LsO9ASaDpmo2BprhErjyLZPrUbY5e-baY`,
  };

  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_DB_ENDPOINT,
    headers,
    cache: new InMemoryCache(),
  });
  return client;
};

export default client;
