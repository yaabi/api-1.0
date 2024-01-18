import { Box, TextField } from "@mui/material";
import React from "react";

export default function YaabiInput(props) {
  return (
    <Box my={"20px"}>
      <TextField
        {...props}
        FormHelperTextProps={{ sx: { fontWeight: "bold" } }}
        InputLabelProps={{ sx: { fontSize: "14px" }, shrink: true }}
      />
    </Box>
  );
}
