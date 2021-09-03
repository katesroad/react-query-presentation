import { Wrapper } from 'components/Todos/styles';
import { useGetTodos } from "hooks/queries/todos.hooks";
import * as React from "react";
import { useTable } from "react-table";
import { columns } from "./columns";

interface TodosProps {
	user: string;
}

const Todos: React.FC<TodosProps> = ({ user }) => {
	const { status, data: todos } = useGetTodos(user);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns,
			data: todos ?? [],
		});

	const content = status === 'success' ?
		(
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
										<td {...cell.getCellProps()}>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>) : (
			['loading', 'idel'].includes(status) ? <p>Loading...</p> : <p>Failed to load data</p>
		)

	return (
		<Wrapper>
			<h4>Todo List</h4>
			{user ? content : <p>No user is selected</p>}
		</Wrapper>
	);
};

export default Todos;
