import UpdateTodoForm from "components/AdminScreen/Form/UpdateTodo";
import Modal, {
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "components/Modal";
import { useDeleteTodo, useUpdateTodo } from "hooks/queries/todos.hooks";
import React from "react";
import { ITodo } from "types/todo";

export const Actions: React.FC<{ todo: ITodo }> = ({ todo }) => {
  const [showEditModal, setShowEditModal] = React.useState<boolean>(false);
  const handleDismiss = React.useCallback(() => {
    setShowEditModal(false);
  }, []);

  const updateMutation = useUpdateTodo(todo.user._id);
  const deleteMutation = useDeleteTodo();

  const handleClickEdit = () => {
    setShowEditModal(true);
    return false;
  };

  const handleClickComplete = () => {
    updateMutation.mutate({ ...todo, completed: true });
    return false;
  };

  const handleClickDelete = () => {
    deleteMutation.mutate(todo._id);
    return false;
  };

  return (
    <>
      <span className="btn-group">
        <button
          className="btn btn-primary btn-sm"
          disabled={todo.completed}
          onClick={handleClickComplete}
        >
          complete
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={handleClickEdit}
          disabled={todo.completed}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={handleClickDelete}>
          Delete
        </button>
      </span>
      {/* The modal for editting todo */}
      <Modal isOpen={showEditModal} onDismiss={handleDismiss}>
        <ModalHeader>
          <h4>Update {todo.title}</h4>
          <ModalCloseButton>x</ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <UpdateTodoForm id={todo._id} onSuccess={handleDismiss} />
        </ModalBody>
      </Modal>
    </>
  );
};
