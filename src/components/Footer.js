// components/Footer.js
"use client"; // Add this line to specify it's a client component

import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme(); // Access the theme

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: theme.palette.foreground.dark, // Use color from theme
        color: theme.palette.foreground.light, // Text color from theme
      }}
    >
      <p>© 2024 PoGo Guide. All rights reserved.</p>
      <p style={{ fontSize: "0.8rem", color: "white" }}>
        Pokémon and Pokémon GO are copyright of The Pokémon Company, Niantic,
        Inc., and Nintendo. All trademarked images and names are property of
        their respective owners, and any such material is used on this site for
        educational purposes only.
        <br />
        PoGo Guide has no affiliation with The Pokémon Company, Niantic, Inc.,
        or Nintendo.
      </p>
    </footer>
  );
}
