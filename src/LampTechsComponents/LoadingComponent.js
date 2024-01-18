import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

export default function LoadingComponent({ IsLoading = false }) {
  return (
    <Backdrop open={IsLoading} style={{ zIndex: 9999 }}>
      <CircularProgress color="inherit" size={100} />
    </Backdrop>
  );
}
