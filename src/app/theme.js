// theme.js
"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { themeVariables } from "./themeVariables.js";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      smsm: 450,
      sm: 600,
      bgsm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      default: themeVariables.background,
      dark: themeVariables.backgroundDark,
    },
    foreground: {
      default: themeVariables.foreground,
      light: themeVariables.foregroundLight,
      dark: themeVariables.foregroundDark,
    },
    primary: {
      main: themeVariables.primary,
      dark: themeVariables.primaryDark,
      light: themeVariables.primaryLight,
      foreground: themeVariables.primaryForeground,
      "foreground-dark": themeVariables.primaryForegroundDark,
    },
    common: {
      main: themeVariables.white,
      white: themeVariables.white,
      black: themeVariables.black,
      gray: themeVariables.gray,
      "dark-gray": themeVariables.darkGray,
    },
    pokeball: {
      red: themeVariables.pokeballRed,
      black: themeVariables.pokeballBlack,
      gray: themeVariables.pokeballGray,
    },
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "&>.MuiFormControl-root>.mui-1daiic5-MuiInputBase-root-MuiOutlinedInput-root":
            {
              color: themeVariables.foregroundDark,
            },
          "&>.MuiFormControl-root>.MuiInputBase-root": {
            borderRadius: "20px",
            padding: "0px 0px 0px 10px",
          },
          "&>.MuiFormControl-root>.MuiInputBase-root>.mui-1d3z3hw-MuiOutlinedInput-notchedOutline":
            {
              borderColor: themeVariables.foregroundLight,
            },
          "&:hover .MuiFormControl-root>.MuiInputBase-root>.mui-1d3z3hw-MuiOutlinedInput-notchedOutline":
            {
              borderColor: themeVariables.foregroundDark,
            },
        },
      },
      variants: [
        {
          props: { size: "small" },
          style: {
            "&>.MuiFormControl-root>.MuiInputBase-root": {
              //     minWidth: 178,
              //     boxSizing: "border-box",
              //     height: "38px",
              //     paddingTop: "7px",
              borderRadius: "999px",
            },
          },
        },
      ],
    },
    MuiGrid: {
      variants: [
        {
          props: { variant: "gradient" },
          style: {
            background: `linear-gradient(to bottom, ${themeVariables.primary}, white, white)`,
          },
        },
      ],
    },
    MuiToggleButton: {
      variants: [
        {
          props: { variant: "ghost" },
          style: {
            border: "none",
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 6,
            paddingBottom: 6,
            borderRadius: 18,
            color: themeVariables.foreground,
          },
        },
      ],
    },
  },
});

// theme.typography.cardTitle = {
//   [theme.breakpoints.not("xs")]: {
//     fontSize: "24px",
//   },
//   // [theme.breakpoints.down("xl")]: {
//   //   fontSize: "40px",
//   // },
//   [theme.breakpoints.only("xs")]: {
//     fontSize: "20px",
//   },
// };

export default theme;
