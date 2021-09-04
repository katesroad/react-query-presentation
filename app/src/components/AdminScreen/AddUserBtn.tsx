import React from "react";
import Modal, {
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "components/Modal";
import AddUserForm from "components/AdminScreen/Form/AddUser";

export const AddUserBtn: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(true);
    return false;
  };

  const handleDismiss = React.useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button className="btn btn-primary btn-sm" onClick={handleClick}>
        add user
      </button>
      <Modal isOpen={isOpen} onDismiss={handleDismiss}>
        <ModalHeader>
          <h4>Create user</h4>
          <ModalCloseButton>x</ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <AddUserForm onSuccess={handleDismiss} />
        </ModalBody>
      </Modal>
    </>
  );
};
