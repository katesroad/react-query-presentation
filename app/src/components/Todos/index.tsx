import { Wrapper } from "components/Todos/styles";
import { useGetTodos } from "hooks/queries/todos.hooks";
import * as React from "react";
import { useTable } from "react-table";
import { TodoQuery } from "types/todo";
import { columns } from "components/Todos/columns";

const Todos: React.FC<TodoQuery> = ({ ...query }) => {
  const { status, data: todos } = useGetTodos(query);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: todos ?? [],
    });

  const content =
    status === "success" ? (
      <div>
        <table
          {...getTableProps()}
          className="table table-bordered table-striped table-hover table-sm"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {!todos.length && (
          <div className="no-data card">
            <h4>No data</h4>
          </div>
        )}
      </div>
    ) : ["loading", "idel"].includes(status) ? (
      <div className="no-data card">
        <p>Loading...</p>
      </div>
    ) : (
      <div className="no-data card">
        <p>Loading...</p>
      </div>
    );

  return <Wrapper>{content}</Wrapper>;
};

export default Todos;
