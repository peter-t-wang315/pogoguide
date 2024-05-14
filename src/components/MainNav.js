import { Box, Grid, Stack, Typography } from "@mui/material";
import NavSearch from "./NavSearch";
import Link from "next/link";

export default async function MainNav() {
  // TO DO: Make it so that when the user is on phone, that the search bar turns into the icon and then
  // can change the entire nav. Look at MUI docs on phone

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
        px: 4,
        backgroundColor: "background.default",
        boxShadow: 5,
        zIndex: 1000,
      }}
    >
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&>.MuiGrid-root>.mui-5aj1w8-MuiGrid-root>.MuiGrid-item": {
            padding: 0, // Remove padding from child element with class MuiCardContent-root
          },
        }}
      >
        <Stack direction="row" spacing={4}>
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </Stack>
      </Grid>
      <Grid
        item
        xs={3}
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
          <Typography variant="h5">PoGo Guide</Typography>
        </Link>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NavSearch options={options} />
      </Grid>
    </Grid>
  );
}
