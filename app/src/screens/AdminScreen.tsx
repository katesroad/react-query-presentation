import React from "react";
import styled from "styled-components";
import TodoList from "components/Todos";
import { useQueryClient } from "react-query";
import TodoStats from "components/TodoStats";
import Modal, {
	ModalBody,
	ModalHeader,
	ModalCloseButton,
} from "components/Modal";
import AddTodoForm from "components/Form/AddTodo";
import UserList from "components/UserList/index";
import AddUserForm from "components/Form/AddUser";
import { IUser } from "types/users";

const Wrapper = styled.div`
	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
`;

const Header = styled.header`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

const ClearButton: React.FC<{ user: string }> = ({ user }) => {
	const queryClient = useQueryClient();
	const handleClick = (e: any) => {
		// to manually make the previous cached data to be stale
		queryClient.invalidateQueries(["todos", user]);
		return false;
	};

	return (
		<button className="btn btn-secondary btn-sm" onClick={handleClick}>
			clear cache
		</button>
	);
};

const AddTodoButton: React.FC<{ user: string }> = ({ user }) => {
	const [showModal, setShowModal] = React.useState<boolean>(false);
	const handleSucess = React.useCallback(() => {
		setShowModal(false);
	} ,[]);

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

const AddUserButton: React.FC = () => {
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

export default function UsersDoTosScreen() {
	const [user, setUser] = React.useState<IUser | null>(null);

	const handleChange = (u: IUser | null) => setUser(u);

	return (
		<Wrapper className="container">
			<Header>
				<UserList current={user} onChange={handleChange} />
				<AddUserButton />
			</Header>
			<Header>
				<h2>
					{user?.name ? `${user?.name}` : "Please select an user"}
				</h2>
				<span className="btn-group">
					<ClearButton user={user?._id ?? ""} />
					{user && <AddTodoButton user={user?._id ?? ""} />}
				</span>
			</Header>
			<TodoStats user={user?._id ?? ""} />
			<TodoList user={user?._id ?? ""} />
		</Wrapper>
	);
}
