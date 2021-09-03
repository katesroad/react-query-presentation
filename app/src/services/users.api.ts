import request from "services/request";
import { IUserData } from "types/users";

export function getUsers() {
  return request("/users");
}

export function createUser(data: IUserData) {
  return request.post("/users", { data });
}

export function getUser(id: string) {
  return request.get(`/users/${id}`);
}
