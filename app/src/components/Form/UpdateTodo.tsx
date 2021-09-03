import React from "react";
import TodoForm from "components/Form/TodoForm";
import { ITodoData } from "types/todo";
import { useGetTodo } from "hooks/queries/todos.hooks";
import { useUpdateTodo } from "hooks/queries/todos.hooks";

interface UpdateTodoFormProps {
	id?: string;
	onSuccess: () => void;
}

const UpdateTodoForm: React.FC<UpdateTodoFormProps> = ({ id, onSuccess }) => {
	const { status, data: todo } = useGetTodo(id);

	const {mutate: onSubmit, status: updateStatus} = useUpdateTodo(todo?.user ?? "");
	const handleSubmit = (data: ITodoData) => {
		onSubmit({ ...todo, ...data });
	};

	React.useEffect(() => {
		if (updateStatus === 'success') {
			onSuccess();
		}
	}, [updateStatus, onSuccess]);

	if (["loading", "idel"].includes(status)) {
		return <p>Loading...</p>;
	}

	if (status === "error") {
		return <p>Failed to fetch todo data</p>;
	}

	if (status === "success") {
		return <TodoForm initialValues={todo} onSubmit={handleSubmit} />;
	}

	return null;
};

export default UpdateTodoForm;
