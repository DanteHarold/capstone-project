import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 2,
      }}
    >
      <Grid
        item
        className="shadow-2xl"
        xs={6}
        sx={{
          backgroundColor: "white",
          padding: 6,
          borderRadius: 6,
        }}
      >
        <Typography variant="h4" textAlign="center" sx={{ mt: 2, mb: 4 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
