"use client";
import {
  Autocomplete,
  IconButton,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function NavSearch() {
  const theme = useTheme();
  const medium = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const options = [
    { name: "Raids" },
    { name: "Catching" },
    { name: "Friendship" },
    { name: "Incense" },
    { name: "Pokemon Storage" },
    { name: "Item Storage" },
    { name: "Trades" },
    { name: "Gyms" },
    { name: "PvP" },
    { name: "Shinies" },
    { name: "Shadow" },
    { name: "IVs" },
  ];

  return medium ? (
    <IconButton>
      <SearchIcon />
    </IconButton>
  ) : (
    <Autocomplete
      id="search"
      freeSolo
      options={options.map((option) => option.name)}
      renderInput={(params) => <TextField {...params} placeholder="Search" />}
      sx={{ minWidth: "150px" }}
    />
  );
}
