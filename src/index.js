import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "./components/loading";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/api"
    : "https://api.sdkay.pw/api";
let client = new ApolloClient({
  uri: API_URL
});
const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ "./views/home"),
  loading: Loading
});
const Tournament = Loadable({
  loader: () => import(/* webpackChunkName: "Tourny" */ "./views/tourny"),
  loading: Loading
});
const App = () => (
  <Router>
    <ApolloProvider client={client}>
      <Route exact path="/" component={Home} />
      <Route path="/league/:id" component={Tournament} />
    </ApolloProvider>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
