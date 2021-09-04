import React from "react";
import { useGetTodos } from "hooks/queries/todos.hooks";
import { ITodo, TodoQuery } from "types/todo";
import { Wrapper } from "components/TodoStats/styles";

const Stats: React.FC<{ todos: ITodo[] }> = ({ todos }) => {
  const total = todos?.length;
  const done = todos?.filter((todo: ITodo) => todo.completed).length;
  return (
    <>
      <p>
        <strong>Overall</strong>: {total} todos
      </p>
      {total ? (
        <>
          <p>
            <strong>Completed</strong>: {done} todos
          </p>
          <p>
            <strong>Unfinished</strong>: {total - done} todos.
          </p>
        </>
      ) : null}
    </>
  );
};

const TodoStats: React.FC<TodoQuery> = ({ ...query }) => {
  const { status, data: todos } = useGetTodos(query);

  const content = ["loading", "idel"].includes(status) ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Failed to load todo</p>
  ) : (
    <Stats todos={todos} />
  );

  return (
    <Wrapper className="card">
      <h4>Todo stats</h4>
      {content}
    </Wrapper>
  );
};

export default TodoStats;
