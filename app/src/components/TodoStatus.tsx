import classNames from "classnames";
import styled from "styled-components";
import { ITodo } from "types/todo";

const Wrapper = styled.span`
  font-weight: bolder;
  &.is-new {
    color: var(--bs-red);
  }
  &.is-done {
    color: var(--bs-green);
  }
`;

export const TodoStatus: React.FC<{ todo: ITodo }> = ({ todo }) => {
  return (
    <Wrapper
      className={classNames({
        "is-new": !todo?.completed,
        "is-done": todo?.completed,
      })}
    >
      {todo?.completed ? "Completed" : "New"}
    </Wrapper>
  );
};
