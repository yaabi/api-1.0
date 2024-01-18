import { Box, FormControl, InputLabel, Select, TextField } from "@mui/material";
import React from "react";

export default function YaabiSelect(props) {
  return (
    <Box my={"20px"}>
      <FormControl {...props}>
        <InputLabel sx={{ backgroundColor: "white" }} shrink>
          {props?.label}
        </InputLabel>
        <Select
          name={props?.name}
          onChange={props?.onChange}
          MenuProps={{
            sx: {
              fontSize: "14px",
            },
          }}
        >
          {props.children}
        </Select>
      </FormControl>
    </Box>
  );
}
