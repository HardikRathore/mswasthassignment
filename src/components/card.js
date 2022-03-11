import { Paper, Typography } from "@mui/material";
import React from "react";
import { SnackbarComp } from "./snackbar";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Paper
        onClick={handleClick}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          m: 3,
          p: 2,
          border: 1,
          backgroundColor: "#b6d2ff50",
          height: "22vh",
        }}
        elevation={3}
      >
        <Typography
          borderBottom={1}
          variant="h5"
          fontWeight={600}
          paddingBottom={1}
        >
          {props.medName}
        </Typography>
        <Typography variant="body1" paddingTop={1}>
          {props.saltName}
        </Typography>
      </Paper>
      <SnackbarComp open={open} handleClose={handleClose} />
    </>
  );
}
