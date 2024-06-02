"use client";

import { Stack, useMediaQuery, useTheme } from "@mui/material";
import NavDrawer from "./NavDrawer";

export default function NavLinks({}) {
  const theme = useTheme();
  const medium = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const options = [
    { name: "Categories" },
    { name: "Pages" },
    { name: "Contribute" },
  ];

  return medium ? (
    <NavDrawer />
  ) : (
    <Stack direction="row" spacing={{ xs: 2, lg: 4 }}>
      <p>Categories</p>
      <p>Pages</p>
      <p>Contribute</p>
    </Stack>
  );
}
