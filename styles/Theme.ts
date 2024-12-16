import { createTheme } from "@mui/material";

const Theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "25px",
                    boxShadow: "0px 1px 10px black",
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "50px",
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderRadius: "50px",
                }
            }
        }
    }
})

export default Theme;