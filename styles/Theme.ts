import { createTheme } from "@mui/material";

const Theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
          boxShadow: "0px 1px 10px black",
          backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity, 1))",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: "50px",
        },
        input: {
          fontFamily: "Lexend",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        formControl: {
          fontFamily: "Lexend",
        },
      },
    },
  },
});

export default Theme;
