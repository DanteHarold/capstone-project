import { Box } from "@mui/system";
import { NavBar } from "../components";
import { Toolbar } from "@mui/material";

export const CapstoneLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "white",
      }}
    >
      <NavBar />
      {/* SideBar */}
      <Box
        className=" shadow-2xl mx-auto bg-white w-full sm:w-3/4"
        component="main"
        sx={{ mt: 10, pb: 10, maxWidth: 1200 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
