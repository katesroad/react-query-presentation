import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUsersKey } from "hooks/queries/query-key";
import { getUsers, createUser } from "services/users.api";
import { IUserData } from "types/users";
import { getUserKey } from "./query-key";
import { getUser } from "services/users.api";

export const useGetUsers = () => {
  const queryKey = getUsersKey();
  return useQuery(queryKey, getUsers, {
    staleTime: 30 * 60 * 1000,
  });
};

export const useCreateUser = () => {
  const queryKey = getUsersKey();
  const queryFn = (data: IUserData) => createUser(data);
  const queryClient = useQueryClient();

  return useMutation(queryKey, queryFn, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  });
};

export const useGetUser = (id: string) => {
  const queryKey = getUserKey(id);
  const queryFn = () => getUser(id);

  return useQuery(queryKey, queryFn, {
    enabled: !!id,
  });
};
