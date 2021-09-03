import React from "react";
import { Form, Formik, Field } from "formik";
import { useCreateUser } from "hooks/queries/users.hooks";
import { IUserData } from "types/users";
import { FormField } from "components/shared";

const initialValues: IUserData = {
	age: 18,
	email: "",
	name: "",
};

interface AddUserFormProps {
	onSuccess: () => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onSuccess }) => {
	const { status, mutate: onSubmit } = useCreateUser();

	const handleSubmit = (user: IUserData) => onSubmit(user);

	React.useEffect(() => {
		if (status === "success") {
			onSuccess();
		}
	}, [status, onSuccess]);

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			{() => (
				<Form>
					<FormField>
						<label htmlFor="name" className="form-label">
							Name:
						</label>
						<Field
							type="text"
							name="name"
							className="form-control"
						/>
					</FormField>
					<FormField>
						<label htmlFor="Age">Age: </label>
						<Field
							type="number"
							name="age"
							className="form-control"
						/>
					</FormField>
					<FormField>
						<label htmlFor="email" className="form-label">
							Email:
						</label>
						<Field name="email" className="form-control" />
					</FormField>
					<FormField>
						<button
							className="btn btn-primary btn-sm"
							type="submit"
						>
							Submit
						</button>
					</FormField>
				</Form>
			)}
		</Formik>
	);
};

export default AddUserForm;
