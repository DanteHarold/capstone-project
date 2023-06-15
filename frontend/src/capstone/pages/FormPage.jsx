import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { CapstoneLayout } from "../layout/CapstoneLayout";
import { FormView } from "../views/FormView";

export const FormPage = () => {
  return (
    <>
      <CapstoneLayout>
        <FormView />
      </CapstoneLayout>
    </>
  );
};
