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

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { getInputs } from "../helpers/getInputs";
import { CustomTextInput } from "../components/CustomTextInput";

export const FormView = () => {
  const { initialValues, inputs, validationSchema } = getInputs("form");

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1, px: 6 }}
    >
      <Grid item className="flex justify-center items-center">
        <Grid
          item
          className="flex-col justify-center items-center w-full  xl:px-10 "
        >
          {/* form */}

          <Formik
            {...{ initialValues, validationSchema }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form
                noValidate
                className="animate__animated animate__fadeIn animate__fast "
              >
                {inputs.map(
                  ({ name, type, value, label, key, id, ...props }) => {
                    switch (type) {
                      default:
                        return (
                          <>
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
                          </>
                        );
                    }
                  }
                )}

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
                        Sign Up
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
