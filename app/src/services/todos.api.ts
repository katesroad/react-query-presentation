import { ICreateTodo, ITodo } from "types/todo";
import request from "services/request";

export function getTodos(user: string) {
  return request(`/users/${user}/todos`);
}

export function createTodo(data: ICreateTodo) {
  return request.post(`/todos`, { data });
}

export function updateTodo(newData: ITodo) {
  const { _id: id, user, ...data } = newData;
  return request.patch(`/todos/${id}`, { data });
}

export function getTodo(id: string) {
  return request.get(`/todos/${id}`);
}

export function deleteTodo(id: string) {
  return request.delete(`/todos/${id}`);
}
