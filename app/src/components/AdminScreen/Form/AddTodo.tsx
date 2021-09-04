import React from "react";
import { useCreateTodo } from "hooks/queries/todos.hooks";
import TodoForm from "./TodoForm";
import { ITodoData } from "types/todo";

const initialValues = {
  title: "",
  description: "",
  completed: false,
};

interface AddTodoFormProps {
  user: string;
  onSuccess: () => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ user, onSuccess }) => {
  const { status, mutate: onSubmit } = useCreateTodo(user);

  const handleSubmit = (data: ITodoData) => {
    onSubmit({ ...data, user });
  };

  React.useEffect(() => {
    if (status === "success") {
      onSuccess();
    }
  }, [status, onSuccess]);

  return <TodoForm initialValues={initialValues} onSubmit={handleSubmit} />;
};

export default AddTodoForm;
