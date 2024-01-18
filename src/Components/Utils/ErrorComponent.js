import { Typography } from "@mui/material";
import React from "react";

export default function ErrorComponent({ error }) {
  return (
    error && (
      <Typography color={"error.main"} textAlign={"center"} p={"10px"}>
        {error}
      </Typography>
    )
  );
}
