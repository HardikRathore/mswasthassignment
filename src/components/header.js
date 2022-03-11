import { AppBar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      sx={{
        backgroundColor: "#40588e9",
      }}
      elevation={0}
    >
      <Typography variant="h4" fontWeight={600} sx={{ p: 3 }}>
        Medicine Information
      </Typography>
    </AppBar>
  );
}
