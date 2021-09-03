import { getTodosKeys } from "hooks/queries/query-key";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from "services/todos.api";
import { ICreateTodo, ITodo } from "types/todo";
import { getToDoKey } from "./query-key";

export function useGetTodos(user: string) {
  const queryKey = getTodosKeys(user);
  const queryFn = () => getTodos(user);
  const conf = {
    enabled: !!user,
    retry: 1,
  };

  return useQuery(queryKey, queryFn, conf);
}

export function useCreateTodo(user: string) {
  const queryFn = (data: ICreateTodo) => createTodo(data);
  const queryKey = getTodosKeys(user);

  const queryClient = useQueryClient();
  const conf = {
    enabled: !!user,
    retry: 1,
    onSuccess: () => queryClient.prefetchQuery(queryKey),
    onError: () => {
      toast.error("Create to do failed");
    },
  };

  return useMutation(queryKey, queryFn, conf);
}

export function useGetTodo(id?: string) {
  const queryFn = () => getTodo(id ?? "");
  const queryKey = getToDoKey(id ?? "");

  return useQuery(queryKey, queryFn, { enabled: !!id });
}

export function useUpdateTodo(todoUser: string) {
  const queryClient = useQueryClient();
  const queryFn = (newData: ITodo) => updateTodo(newData);
  const queryKey = getTodosKeys(todoUser);

  return useMutation(queryFn, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  });
}

export function useDeleteTodo(todoUser: string) {
  const queryFn = (id: string) => deleteTodo(id);
  const queryClient = useQueryClient();
  const queryKey = getTodosKeys(todoUser);

  return useMutation(queryFn, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  });
}
