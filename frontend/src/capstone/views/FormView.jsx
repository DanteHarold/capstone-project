import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import * as Yup from "yup";
import { useFormik, Formik, Form } from "formik";
import {
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  InputLabel,
  Alert,
} from "@mui/material";
import { useSelector } from "react-redux";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { getInputs } from "../helpers/getInputs";
import { CustomTextInput } from "../components/CustomTextInput";
import { useEffect } from "react";
import { createUser, getAllUsers } from "../../api/user.api";
import { message } from "../../constants";
import { useNavigate } from "react-router-dom";

export const FormView = () => {
  const { initialValues, inputs, validationSchema } = getInputs("form");

  const { displayName, email, uid } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      const res = await getAllUsers();
      console.log(res);
    };
    loadUsers();
  }, []);

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1, px: 6 }}
    >
      <Grid
        item
        alignItems="center"
        className="font-semibold text-zinc-600 text-4xl text-center "
        sx={{ mb: 4, px: 6, mx: "auto" }}
      >
        {message.title2}
      </Grid>
      <Grid
        alignItems="center"
        className="font-semibold text-zinc-600  xl:text-lg xl:px-10"
        sx={{ mb: 4 }}
      >
        {message.subtitle}
      </Grid>

      <Grid item className="flex justify-center items-center">
        <Grid
          item
          className="flex-col justify-center items-center w-full  xl:px-10 "
        >
          {/* form */}

          <Formik
            {...{ initialValues, validationSchema }}
            onSubmit={async (values) => {
              const MySwal = withReactContent(Swal);

              MySwal.fire({
                position: "center",
                icon: "success",
                title: "Good Job",
                confirmButtonText: "Ok",
              }).then(() => {
                navigate("/");
              });

              const res = await createUser({
                uid,
                name: displayName,
                email,
                rptsDocument: values,
              });

              console.log(res);

              console.log({
                uid,
                name: displayName,
                email,
                rptsDocument: values,
              });
            }}
          >
            {() => (
              <Form
                noValidate
                className="animate__animated animate__fadeIn animate__fast "
              >
                {inputs.map(({ name, type, value, label, id, ...props }) => {
                  switch (type) {
                    default:
                      return (
                        <div key={props.key}>
                          <InputLabel
                            htmlFor={name}
                            sx={{ mb: 2, whiteSpace: "wrap" }}
                          >
                            {label}
                          </InputLabel>
                          <CustomTextInput
                            id={id}
                            name={name}
                            placeholder={props.placeholder}
                            type={type}
                          />
                        </div>
                      );
                  }
                })}

                <Grid container spacing={2} sx={{ mb: 0, mt: 2 }}>
                  <Grid
                    className="flex justify-center mx-auto"
                    item
                    xs={12}
                    sx={{}}
                  >
                    {/* <Link component={RouterLink} to="/"> */}
                    <Button
                      className="w-full md:w-1/2 lg:w-1/4"
                      type="submit"
                      variant="contained"
                      sx={{ backgroundColor: "secondary.main" }}
                    >
                      <Typography sx={{ color: "white", py: 1 }}>
                        Send
                      </Typography>
                    </Button>
                    {/* </Link> */}
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
};
