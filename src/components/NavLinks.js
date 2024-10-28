"use client";

import { Stack, useMediaQuery, useTheme, Typography } from "@mui/material";
import MobileNavDrawer from "./MobileNavDrawer";
import NavDropDown from "./NavDropdown";
import categories from "../app/InfoCategories";
import pages from "@/app/InfoPages";

export default function NavLinks({}) {
  const theme = useTheme();
  const medium = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return medium ? (
    <Stack direction="row" spacing={{ xs: 2, lg: 4 }}>
      <Stack direction="row" spacing={{ xs: 2, lg: 4 }} alignItems="center">
        <NavDropDown title="Categories" items={categories} />
        <NavDropDown title="Pages" items={pages} />
        {/* <Typography component="span" variant="body1">
          Pages
        </Typography> */}
        <Typography component="span" variant="body1">
          Contribute
        </Typography>
      </Stack>
    </Stack>
  ) : (
    <MobileNavDrawer />
  );
}
