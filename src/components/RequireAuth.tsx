import { useAuth } from "hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  let location = useLocation();
  console.log({ auth });

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
