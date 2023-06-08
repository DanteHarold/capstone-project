import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CapstoneRoutes } from "../capstone/routes/CapstoneRoutes";
import { CheckingAuth } from "../ui/components";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<CapstoneRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
      {/**Login  */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

      {/* CapstoneApp */}
      {/* <Route path="/*" element={<CapstoneRoutes />} /> */}
    </Routes>
  );
};
