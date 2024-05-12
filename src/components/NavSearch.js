"use client";
import { Autocomplete, TextField } from "@mui/material";

export default function NavSearch({ options }) {
  return (
    <Autocomplete
      id="search"
      freeSolo
      options={options.map((option) => option.name)}
      renderInput={(params) => <TextField {...params} placeholder="Search" />}
      sx={{ minWidth: "150px" }}
    />
  );
}
