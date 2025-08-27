import type { FC } from "react";
import { Outlet, Navigate } from "react-router";
import { useAppSelector } from "../../store/store";

interface ProtectedRouteProps {
  type: "public" | "auth";
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ type }) => {
  const isAuth = useAppSelector((state) => state.user.isAuth);

  if (type == "auth" && !isAuth) {
    return <Navigate to="/login" />;
  }
  if (type == "public" && isAuth) {
    return <Navigate to="profile" />;
  }

  return <Outlet />;
};
