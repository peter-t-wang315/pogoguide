import { Grid, Typography } from "@mui/material";
import NavSearch from "./NavSearch";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function MainNav() {
  // TO DO: Make it so that when the user is on phone, that the search bar turns into the icon and then
  // can change the entire nav. Look at MUI docs on phone

  return (
    <Grid
      container
      sx={{
        position: "sticky",
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 2,
        px: { xs: 0, lg: 20, xl: 30 },
        backgroundColor: "background.default",
        boxShadow: 5,
        zIndex: 1000,
      }}
    >
      <Grid item xs={2} lg={3}>
        <NavLinks />
      </Grid>
      <Grid
        item
        xs={6}
        lg={5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "var(--foreground)",
          }}
        >
          <Typography
            sx={{
              typography: { xs: "h6", smsm: "h5" },
              fontWeight: { xs: "normal", smsm: "normal" },
            }}
          >
            PoGo Guide
          </Typography>
        </Link>
      </Grid>
      <Grid
        item
        xs={2}
        lg={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <NavSearch />
      </Grid>
    </Grid>
  );
}
