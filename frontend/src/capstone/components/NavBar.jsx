import {
  AppBar,
  Grid,
  Toolbar,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { BiExit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";
import { Navigate, Route, Routes, Link as RouterLink } from "react-router-dom";
export const NavBar = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar sx={{ backgroundColor: "white" }}>
      <Toolbar
        sx={{ maxWidth: 1200, backgroundColor: "white" }}
        className=" mx-auto bg-white w-full sm:w-3/4 shadow-lg"
      >
        <Grid container flex justifyContent="space-between" alignItems="center">
          <Grid item className="py-4">
            <Button
              color="inherit"
              sx={{ borderBottom: 2 }}
              component={RouterLink}
              to="/"
            >
              Inicio
            </Button>
            <Button color="inherit" component={RouterLink} to="/form">
              Encuesta
            </Button>
            <Button color="inherit" component={RouterLink} to="/results">
              Resultados
            </Button>
          </Grid>

          <IconButton onClick={onLogout}>
            <Typography
              color="secondary.main"
              sx={{ paddingRight: 1 }}
            ></Typography>
            <BiExit />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
