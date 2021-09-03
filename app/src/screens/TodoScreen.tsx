import React from "react";
import { useParams } from "react-router";
import { useGetTodo } from "hooks/queries/todos.hooks";
import styled from "styled-components";
import { useGetUser } from "hooks/queries/users.hooks";
import { TodoStatus } from "components/TodoStatus";

const Wrapper = styled.div`
  margin-top: 1rem;
  .todo {
    margin-top: 1rem;
    padding: 1rem;
  }
`;

export default function TodoScreen() {
  const { id } = useParams<{ id: string }>();
  const { status: todoStatus, data: todo } = useGetTodo(id);
  const { data: user } = useGetUser(todo?.user);

  return (
    <Wrapper className="container">
      <p>
        <strong>Owner</strong>: {user?.name ? user.name : "loading..."}
      </p>
      <div className="todo card">
        {["loading", "idel"].includes(todoStatus) ? (
          <p>loading</p>
        ) : todoStatus === "error" ? (
          <p>Failed to load todo</p>
        ) : (
          <div>
            <h4>{todo?.title}</h4>
            <p>{todo?.description}</p>
            <p>
              Status: <TodoStatus todo={todo} />
            </p>
          </div>
        )}
      </div>
    </Wrapper>
  );
}
