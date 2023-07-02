import { Button, Grid, Typography } from "@mui/material";
import { mujer, woman } from "../../assets";
import { message } from "../../constants";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
export const NoteView = () => {
  const { displayName } = useSelector((state) => state.auth);

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
          className="flex-col justify-center items-center w-full sm:w-3/4 md:w-3/5 px-0 sm:px-0 md:px-0 xl:px-10 "
        >
          <Typography variant="h5" textAlign="center" sx={{ mb: 2 }}>
            What's it about
          </Typography>
          <Grid
            item
            className="flex justify-center items-center self-center text-md lg:text-lg"
          >
            Hi {displayName}
            {message.title}
          </Grid>
        </Grid>
        <Grid
          item
          className="hidden lg:block md:w-1/4 md:mx-auto md:rounded-xl self-center"
        >
          <img src={woman} alt="" />
        </Grid>
      </Grid>
      <Grid
        item
        className=" sm:px-20 md:px-36 lg:px-32  flex justify-between items-center w-full pt-10 "
      >
        <Grid item>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "secondary.main" }}
          >
            <BsArrowLeft className="text-white text-2xl " />
            <Typography sx={{ ml: 1, py: 1, color: "white" }}>Back</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "secondary.main" }}
          >
            <Typography sx={{ ml: 1, py: 1, color: "white" }}>Next</Typography>
            <BsArrowRight className="ms-1 text-white text-2xl " />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
