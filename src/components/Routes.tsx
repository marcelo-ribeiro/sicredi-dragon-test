import { Navigate, Route, Routes } from "react-router-dom";
import { RequireAuth } from "components/RequireAuth";
import { DragonsIndex } from "pages/Dragons/Index";
import { Login } from "pages/Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dragons" />} />
      <Route
        path="dragons/*"
        element={
          <RequireAuth>
            <DragonsIndex />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
