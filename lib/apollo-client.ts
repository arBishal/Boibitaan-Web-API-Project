import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_DB_ENDPOINT,
  headers: {
    //@ts-ignore
    ["x-hasura-admin-secret"]: process.env.DB_ADMIN_SECRET,
  },
  cache: new InMemoryCache(),
});

export const useApollo = (sessionToken: string | undefined) => {
  const token = typeof window === "undefined" ? "" : sessionToken;
  const anonymousToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYW5vbnltb3VzIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImFub255bW91cyJ9fQ.iZTylZ7fE4i1zAGO0IP6-oIa6QkVYBu_rtTZhVKBEn0";
  const headers = {
    authorization: token ? `Bearer ${token}` : `Bearer ${anonymousToken}`,
  };

  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_DB_ENDPOINT,
    headers,
    cache: new InMemoryCache(),
  });
  return client;
};

export default client;
