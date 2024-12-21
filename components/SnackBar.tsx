import * as React from "react";
import Box from "@mui/material/Box";
import MuiSnackbar from "@mui/material/Snackbar";

interface SnackBarProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  message: string;
}

const Snackbar = (props: SnackBarProps) => {
  const { open, setOpen, message } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: 500 }}>
      <MuiSnackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        message={message}
        autoHideDuration={3000}
      />
    </Box>
  );
};

export default Snackbar;
