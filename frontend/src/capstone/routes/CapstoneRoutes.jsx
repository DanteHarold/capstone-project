import { Navigate, Route, Routes } from "react-router-dom";
import { CapstonePage } from "../pages/CapstonePage";
import { FormPage } from "../pages/FormPage";
import { ResultsPage } from "../pages/ResultsPage";
export const CapstoneRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CapstonePage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/results" element={<ResultsPage />} />
      {/* Por Defecto */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
