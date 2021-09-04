import React from "react";
import { useIsFetching } from "react-query";
import { Link, Route } from "react-router-dom";
import AdminScreen from "screens/AdminScreen";
import TodoScreen from "./screens/TodoScreen";
import { VscLoading } from "react-icons/vsc";

function App() {
  const isFetching = useIsFetching();
  return (
    <>
      <nav className="container" style={{ marginBottom: "8px" }}>
        <Link to="/">Home</Link>{" "}
        <span>{isFetching ? <VscLoading /> : null}</span>
      </nav>
      <Route path="/" exact component={AdminScreen} />
      <Route path="/todos/:id" component={TodoScreen} />
    </>
  );
}

export default App;
