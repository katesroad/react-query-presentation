import { Actions } from "components/AdminScreen/Todos/actions";
import { TodoStatus } from "components/TodoStatus";
import { queryClient } from "context";
import React from "react";
import { Link } from "react-router-dom";
import { getTodo } from "services/todos.api";
import { ITodo } from "types/todo";

export const columns = [
  {
    Header: "Owner",
    accessor: (data: ITodo) => <p>{data.user?.name}</p>,
  },
  {
    Header: "title",
    accessor: (data: ITodo) => {
      const handleMouseOver = () => {
        queryClient.prefetchQuery(["todo", data._id], () => getTodo(data._id));
      };

      return (
        <Link to={`todos/${data._id}`} onMouseEnter={handleMouseOver}>
          {data.title}
        </Link>
      );
    },
  },
  {
    Header: "description",
    accessor: (data: ITodo) => <p>{data.description}</p>,
  },
  {
    Header: "Status",
    accessor: (data: ITodo) => <TodoStatus todo={data} />,
  },
  {
    Header: "Actions",
    Cell: ({ row: { original: todo } }: any) => <Actions todo={todo} />,
  },
];