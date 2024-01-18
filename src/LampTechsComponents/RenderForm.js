import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

// Generic form element function
const renderFormElement = ({
  field,
  data,
  setData,
  options,
  type = "text",
}) => {
  const handleChange = (value) => {
    setData({ ...data, [field]: value });
  };

  switch (type) {
    case "select":
      return (
        <FormControl fullWidth size="small">
          <InputLabel>{options.label}</InputLabel>
          <Select
            value={data[state] || ""}
            onChange={(e) => handleChange(e.target.value)}
            {...options}
          >
            {options.items.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    // Add more cases for other form elements as needed

    default:
      return (
        <TextField
          fullWidth
          size="small"
          type={type}
          label={options.label}
          value={data[field] || ""}
          onChange={(e) => handleChange(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          {...options}
        />
      );
  }
};
