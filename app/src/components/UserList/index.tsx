import React from "react";
import { useGetUsers } from "hooks/queries/users.hooks";
import { IUser } from "types/users";
import { FormField } from "../shared/FormField";

interface UserListProps {
	current: IUser | null;
	onChange: (currrent: IUser | null) => void;
}
const UserList: React.FC<UserListProps> = ({ onChange, current }) => {
	const { status, data: users = [] } = useGetUsers();

	const handleChange = (e: any) => {
		const user = users?.find((user: IUser) => user._id === e.target.value);
		onChange(user ?? null);
		return false;
	};

	return (
		<FormField>
			<label htmlFor="user" className="form-label">
				User:{" "}
			</label>
			<select
				className="form-select form-select-sm"
				name="user"
				id="user"
				value={current?._id}
				onChange={handleChange}
			>
				<option value="">
					{["loading", "idel"].includes(status) ? (
						<span>Loading... </span>
					) : status === "error" ? (
						<span>Failed to load users </span>
					) : (
						"Please select user"
					)}
				</option>
				{users.map((user: any) => (
					<option value={user._id} key={user._id}>
						{user.name ?? ""}
					</option>
				))}
			</select>
		</FormField>
	);
};

export default UserList;
