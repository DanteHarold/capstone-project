import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassowrd } from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "Email must be valid"],
  password: [
    (value) => value.length >= 6,
    "Password must be longer than 6 characters",
  ],
  displayName: [(value) => value.length >= 1, "Name is Required"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);

  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassowrd(formState));
  };

  return (
    <AuthLayout title="Sign Up">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__fast "
      >
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Name"
            type="text"
            placeholder="John Doe"
            fullWidth
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            error={!!displayNameValid && formSubmitted}
            helperText={displayNameValid}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Email"
            type="email"
            placeholder="JohnDoe@gmail.com"
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
            error={!!emailValid && formSubmitted}
            helperText={emailValid}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Password"
            type="password"
            placeholder="**********"
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
            error={!!passwordValid && formSubmitted}
            helperText={passwordValid}
          />
        </Grid>

        <Grid container sx={{ mt: 1 }} display={!!errorMessage ? "" : "none"}>
          <Grid item xs={12}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={12} sx={{ mb: 5 }}>
            {/* <Link component={RouterLink} to="/"> */}
            <Button
              disabled={isCheckingAuthentication}
              type="submit"
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "secondary.main" }}
            >
              <Typography sx={{ color: "white", py: 1 }}>Sign Up</Typography>
            </Button>
            {/* </Link> */}
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Have an account??</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Sign In
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
