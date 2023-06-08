import { Navigate, Route, Routes } from "react-router-dom";
import { CapstonePage } from "../pages/CapstonePage";
export const CapstoneRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CapstonePage />} />
      {/* Por Defecto */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
