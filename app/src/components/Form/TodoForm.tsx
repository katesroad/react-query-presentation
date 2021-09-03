import React from "react";
import { Field, Form, Formik } from "formik";
import { ITodo } from "types/todo";
import { FormField } from "components/shared";

type TodoData = Omit<ITodo, "user" | "_id">;

interface TodoFormProps {
    initialValues: ITodo | TodoData;
    onSubmit: (data: any) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ initialValues, onSubmit }) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {() => (
                <Form>
                    <FormField>
                        <label htmlFor="title" className="form-label">
                            Title:
                        </label>
                        <Field
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Todo title"
                        />
                    </FormField>
                    <FormField>
                        <label htmlFor="status">Status:</label>
                        <select
                            name="status"
                            id="status"
                            className="form-select form-select-sm"
                        >
                            <option value="">Please select status</option>
                            <option value="false">New</option>
                            <option value="true">Completed</option>
                        </select>
                    </FormField>
                    <FormField>
                        <label htmlFor="description">Description:</label>
                        <Field
                            name="description"
                            type="text"
                            className="form-control"
                            as="textarea"
                            placeholder="Todo's description"
                        />
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

export default TodoForm;
