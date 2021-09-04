import React from "react";
import styled from "styled-components";
import TodoList from "components/AdminScreen/Todos";
import TodoStats from "components/AdminScreen/TodoStats";
import UserList from "components/AdminScreen/UserList";
import { IUser } from "types/users";
import { AddUserBtn } from "components/AdminScreen/AddUserBtn";
import { AddTodoBtn } from "components/AdminScreen/AddTodoBtn";
import { RefreshBtn } from "components/AdminScreen/RefreshBtn";

const Wrapper = styled.div`
  .user-list,
  .current-user {
    align-items: center;
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
  }

  .todo-list {
    margin-top: 2rem;
    h4 button {
      margin-left: 1rem;
    }
  }
`;

export default function UsersDoTosScreen() {
  const [user, setUser] = React.useState<IUser | null>(null);

  const handleChange = (u: IUser | null) => setUser(u);

  return (
    <Wrapper className="container">
      <div className="user-list">
        <UserList current={user} onChange={handleChange} />
        <AddUserBtn />
      </div>

      <div className="current-user">
        {user?.name && <h2>{user.name}</h2>}
        <span className="btn-group">
          {user && <AddTodoBtn user={user?._id ?? ""} />}
        </span>
      </div>

      <TodoStats user={user?._id ?? ""} />

      <div className="todo-list">
        <h4>
          Todo List
          <RefreshBtn user={user?._id ?? ""} />
        </h4>
        <TodoList user={user?._id ?? ""} />
      </div>
    </Wrapper>
  );
}
