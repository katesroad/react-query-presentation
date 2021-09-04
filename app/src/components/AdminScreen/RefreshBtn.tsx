import React from "react";
import { useQueryClient } from "react-query";
import { BiRefresh } from "react-icons/bi";

export const RefreshBtn: React.FC<{ user: string }> = ({ user }) => {
  const queryClient = useQueryClient();
  const queryKey = user ? { user } : null;

  const handleClick = () => {
    queryClient.invalidateQueries(["todos", queryKey]);
    return false;
  };

  return (
    <button className="btn btn-secondary btn-sm" onClick={handleClick}>
      <BiRefresh />
    </button>
  );
};
