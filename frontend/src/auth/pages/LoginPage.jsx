import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log({ name, email });
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    console.log("OnGoogleSignIn");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__fast "
      >
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Email"
            type="email"
            placeholder="John Doe"
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Password"
            type="password"
            placeholder="*********"
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </Grid>

        <Grid container sx={{ mt: 1 }} display={!!errorMessage ? "" : "none"}>
          <Grid item xs={12}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={12} sx={{ mb: 2 }}>
            {/* <Link component={RouterLink} to="/"> */}
            <Button
              disabled={isAuthenticating}
              type="submit"
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "secondary.main" }}
            >
              <Typography sx={{ color: "white", py: 1 }}>Sign In</Typography>
            </Button>
            {/* </Link> */}
          </Grid>
          {/* <Grid item xs={12}>
            <Typography textAlign="center" sx={{ color: "secondary.main" }}>
              Sign In With
            </Typography>
          </Grid> */}
          <Grid item xs={12} sm={12}>
            <Button
              disabled={isAuthenticating}
              onClick={onGoogleSignIn}
              variant="contained"
              fullWidth
            >
              <FcGoogle />
              <Typography sx={{ ml: 1, py: 1 }}>Google</Typography>
            </Button>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <SiMicrosoftoutlook />
                <Typography sx={{ ml: 1, py: 1 }}>Outlook</Typography>
              </Button>
            </Grid> */}
          <Grid container direction="row" justifyContent="end">
            <Link
              component={RouterLink}
              color="inherit"
              to="/auth/register"
              sx={{ mt: 3 }}
            >
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
