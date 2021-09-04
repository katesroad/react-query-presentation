import React from "react";
import Modal, {
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "components/Modal";
import AddTodoForm from "components/AdminScreen/Form/AddTodo";

export const AddTodoBtn: React.FC<{ user: string }> = ({ user }) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const handleSucess = React.useCallback(() => {
    setShowModal(false);
  }, []);

  const handleClick = () => {
    setShowModal(true);
    return false;
  };
  const handleDismiss = React.useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <button className="btn btn-primary btn-sm" onClick={handleClick}>
        add todo
      </button>
      <Modal isOpen={showModal} onDismiss={handleDismiss}>
        <ModalHeader>
          <h4>Create Todo</h4>
          <ModalCloseButton>x</ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <AddTodoForm user={user} onSuccess={handleSucess} />
        </ModalBody>
      </Modal>
    </>
  );
};
