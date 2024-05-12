// theme.js
"use client";
import { createTheme } from "@mui/material/styles";
import { themeVariables } from "./themeVariables.js";

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  palette: {
    background: {
      default: themeVariables.background,
    },
    foreground: {
      default: themeVariables.foreground,
    },
    primary: {
      main: themeVariables.primary,
      dark: themeVariables.primaryDark,
      light: themeVariables.primaryLight,
      foreground: themeVariables.primaryForeground,
      "foreground-dark": themeVariables.primaryForegroundDark,
    },
    common: {
      white: themeVariables.white,
      black: themeVariables.black,
      gray: themeVariables.gray,
    },
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "&>.MuiFormControl-root>.mui-1daiic5-MuiInputBase-root-MuiOutlinedInput-root":
            {
              color: themeVariables.primaryForeground,
            },
          "&>.MuiFormControl-root>.MuiInputBase-root": {
            borderRadius: "20px",
            padding: "0px 0px 0px 10px",
          },
          "&>.MuiFormControl-root>.MuiInputBase-root>.mui-1d3z3hw-MuiOutlinedInput-notchedOutline":
            {
              borderColor: themeVariables.primaryForeground,
            },
          "&:hover .MuiFormControl-root>.MuiInputBase-root>.mui-1d3z3hw-MuiOutlinedInput-notchedOutline":
            {
              borderColor: themeVariables.primaryForegroundDark,
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
  },
});

export default theme;
