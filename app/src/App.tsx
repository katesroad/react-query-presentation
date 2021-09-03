import React from "react";
import { useIsFetching } from "react-query";
import { Link, Route } from "react-router-dom";
import AdminScreen from "screens/AdminScreen";
import TodoScreen from "./screens/TodoScreen";

function App() {
  const isFetching = useIsFetching();
  return (
    <>
      <nav className="container">
        <Link to="/">Home</Link>
        <span>{"  "}</span>
        <span>{isFetching ? "loading..." : ""}</span>
      </nav>
      <Route path="/" exact component={AdminScreen} />
      <Route path="/todos/:id" component={TodoScreen} />
    </>
  );
}

export default App;
