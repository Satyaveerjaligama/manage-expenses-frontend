import * as React from "react";
import Box from "@mui/material/Box";
import MuiSnackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateUtilitySlice } from "@/store/slices/utilitySlice";
import { KEYS_OF_UTILITY_SLICE } from "@/utils/constants";
import { Alert } from "@mui/material";

const Snackbar = () => {
  const dispatch = useDispatch();
  const { open, message, status } = useSelector(
    (state: RootState) => state.utilitySlice.snackBar
  );

  const handleClose = () => {
    dispatch(
      updateUtilitySlice({
        key: KEYS_OF_UTILITY_SLICE.snackBar,
        value: { open: false, message, status },
      })
    );
  };

  return (
    <Box sx={{ width: 500 }}>
      <MuiSnackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <Alert
          onClose={handleClose}
          severity={status}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </MuiSnackbar>
    </Box>
  );
};

export default Snackbar;
