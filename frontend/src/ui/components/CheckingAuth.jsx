import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
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
        xs={6}
        sx={{
          padding: 6,
          borderRadius: 6,
        }}
      >
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  );
};
