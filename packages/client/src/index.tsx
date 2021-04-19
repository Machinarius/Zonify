import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import * as React from "react";
import ReactDOM from "react-dom";
import { useHelloQuery } from "./generated";

const App = () => {
  const { loading, data, error } = useHelloQuery();
  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Could not load data from the API :(</p>
  }

  return (
    <p>API Response: {data.hello}</p>
  );
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:8085/api"
});

ReactDOM.render(
  <ApolloProvider client={client}><App /></ApolloProvider>, 
  document.querySelector("#root")
);