// components/Footer.js
"use client";

import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: theme.palette.foreground.dark,
        color: theme.palette.foreground.light,
      }}
    >
      <Typography>© 2024 PoGo Guide. All rights reserved.</Typography>
      <Typography sx={{ fontSize: "0.8rem", color: "white" }}>
        Pokémon and Pokémon GO are copyright of The Pokémon Company, Niantic,
        Inc., and Nintendo. All trademarked images and names are property of
        their respective owners, and any such material is used on this site for
        educational purposes only.
        <br />
        PoGo Guide has no affiliation with The Pokémon Company, Niantic, Inc.,
        or Nintendo.
      </Typography>
    </footer>
  );
}
