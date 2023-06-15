import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { CapstoneLayout } from "../layout/CapstoneLayout";
import { NoteView } from "../views/NoteView";

export const ResultsPage = () => {
  const navigate = useNavigate();

  console.log(navigate);
  return (
    <CapstoneLayout>
      <NoteView />
    </CapstoneLayout>
  );
};
