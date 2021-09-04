import { Wrapper } from "components/AdminScreen/Todos/styles";
import * as React from "react";
import { TodoQuery } from "types/todo";
import tableColumns from "components/AdminScreen/Todos/columns";
import { useGetTodos } from "hooks/queries/todos.hooks";
import { Table } from "./Table";
import classNames from "classnames";
import { VscError, VscLoading } from "react-icons/vsc";

const Todos: React.FC<TodoQuery> = ({ user }) => {
  const { status, data = [] } = useGetTodos({ user });
  const columns = React.useMemo(() => tableColumns, []);

  const indicatorClassName = classNames("indicator card", {
    "not-visible": status === "success" && !!data.length,
    "no-data": status === "success" && data.length === 0,
    loading: ["loading", "idel"].includes(status),
    error: status === "error",
  });

  return (
    <Wrapper>
      <Table columns={columns} data={data} />
      <div className={indicatorClassName}>
        {["loading", "idel"].includes(status) ? (
          <VscLoading />
        ) : status === "error" ? (
          <p className="error">
            <VscError />
            <span>Load todo list failed</span>
          </p>
        ) : data?.length ? null : (
          <h4>No data</h4>
        )}
      </div>
    </Wrapper>
  );
};

export default Todos;
