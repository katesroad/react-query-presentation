import { Actions } from "components/AdminScreen/Todos/actions";
import { TodoStatus } from "components/TodoStatus";
import { queryClient } from "context";
import { Link } from "react-router-dom";
import { getTodo } from "services/todos.api";
import { ITodo } from "types/todo";

export const columns = [
  {
    Header: "Owner",
    id: "user",
    accessor: (data: ITodo) => <p>{data.user?.name}</p>,
  },
  {
    accessor: (data: ITodo) => {
      const handleMouseEnter = () => {
        queryClient.prefetchQuery(["todo", data._id], () => getTodo(data._id));
      };

      return (
        <Link to={`todos/${data._id}`} onMouseEnter={handleMouseEnter}>
          {data.title}
        </Link>
      );
    },
    Header: "title",
  },
  {
    Header: "description",
    accessor: (data: ITodo) => <p>{data.description}</p>,
  },
  {
    accessor: (data: any) => <TodoStatus todo={data} />,
    filter: "completed",
    id: "completed",
    Header: "Status",
  },
  {
    Header: "Actions",
    id: "actions",
    Cell: ({ row: { original: todo } }: any) => <Actions todo={todo} />,
  },
];

export default columns;
