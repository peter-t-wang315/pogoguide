"use client";

import { Stack, useMediaQuery, useTheme } from "@mui/material";
import NavDrawer from "./NavDrawer";

export default function NavLinks({}) {
  const theme = useTheme();
  const medium = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return medium ? (
    <Stack direction="row" spacing={{ xs: 2, lg: 4 }}>
      <p>Categories</p>
      <p>Pages</p>
      <p>Contribute</p>
    </Stack>
  ) : (
    <NavDrawer />
  );
}
