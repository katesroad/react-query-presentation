import { Actions } from "components/Todos/actions";
import { TodoStatus } from "components/TodoStatus";
import { queryClient } from "context";
import React from "react";
import { Link } from "react-router-dom";
import { getTodo } from "services/todos.api";
import { ITodo } from "types/todo";

export const columns = [
	{
		Header: "title",
		accessor: (data: ITodo) => {
			const handleMouseOver = () => {
				queryClient.prefetchQuery(
					["todo", data._id],
					() => getTodo(data._id)
				);
			};

			return (
				<Link to={`todos/${data._id}`} onMouseEnter={handleMouseOver}>
					{data.title}
				</Link>
			);
		},
	},
	{
		Header: "Status",
		accessor: (data: ITodo) => (
			<TodoStatus todo={data} />
		),
	},
	{
		Header: "Actions",
		Cell: ({ row: { original: todo } }: any) => <Actions todo={todo} />,
	},
];
