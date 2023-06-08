import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages";
import { RegisterPage } from "../pages/RegisterPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      {/* Register en caso Exista */}

      {/* Por Defecto */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
