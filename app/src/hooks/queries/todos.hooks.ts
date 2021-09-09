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
import { ICreateTodo, ITodo, TodoQuery } from "types/todo";
import { getToDoKey } from "./query-key";

export function useGetTodos(query: TodoQuery) {
  const queryKey = getTodosKeys(query);
  const queryFn = () => getTodos(query);
  const conf = { retry: 1 };

  return useQuery(queryKey, queryFn, conf);
}

export function useCreateTodo(todoOwner: string) {
  const queryFn = (data: ICreateTodo) => createTodo(data);
  const queryKey = getTodosKeys({ user: todoOwner });

  const queryClient = useQueryClient();
  const conf = {
    enabled: !!todoOwner,
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

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  const queryFn = (newData: ITodo) => updateTodo(newData);
  const queryKey = getTodosKeys();

  return useMutation(queryFn, {
    onSuccess: (data: ITodo) => {
      queryClient.invalidateQueries(queryKey);
      queryClient.invalidateQueries(getToDoKey(data._id));
    },
    onError: () => {

    },
    onSettled: ()=> {}
  });
}

export function useDeleteTodo() {
  const queryFn = (id: string) => deleteTodo(id);
  const queryClient = useQueryClient();
  const queryKey = getTodosKeys();

  return useMutation(queryFn, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  });
}
