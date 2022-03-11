import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function SnackbarComp(props) {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={6000}
      onClose={props.handleClose}
    >
      <Alert
        onClose={props.handleClose}
        severity="success"
        sx={{ width: { xs: "50%", sm: "100%" }, ml: 4 }}
      >
        List item Clicked!!
      </Alert>
    </Snackbar>
  );
}
