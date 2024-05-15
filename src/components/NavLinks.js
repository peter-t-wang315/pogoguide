"use client";

import { IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavLinks({}) {
  const theme = useTheme();
  const medium = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const options = [
    { name: "Categories" },
    { name: "Pages" },
    { name: "Contribute" },
  ];

  return medium ? (
    <IconButton>
      <MenuIcon />
    </IconButton>
  ) : (
    <Stack direction="row" spacing={{ xs: 2, lg: 4 }}>
      <p>Categories</p>
      <p>Pages</p>
      <p>Contribute</p>
    </Stack>
  );
}
