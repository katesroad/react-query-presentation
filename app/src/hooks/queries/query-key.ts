import { TodoQuery } from "types/todo";

export function getTodosKeys(query?: TodoQuery) {
  if (query) {
    return ["todos", query];
  }
  return ["todos"];
}

export function getToDoKey(id: string) {
  return ["todo", id];
}

export function getUsersKey() {
  return ["users"];
}

export function getUserKey(id: string) {
  return ["users", id];
}
