import {
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  InputLabel,
  Alert,
} from "@mui/material";
import { ErrorMessage, useField } from "formik";
export const CustomTextInput = (props) => {
  const [field] = useField(props);
  return (
    <>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <ErrorMessage
          name={props.name}
          component="span"
          className="text-red-500 text-xs text-opacity-80"
        />
        <TextField {...field} {...props} fullWidth />
      </Grid>
    </>
  );
};
