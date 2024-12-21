"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Divider, InputAdornment, TextField } from "@mui/material";
import { lexend } from "@/utils/fonts";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "25px",
};

interface EditGroupExpenseModalProps {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClose: any;
  label: string;
}

const EditGroupExpenseModal = (props: EditGroupExpenseModalProps) => {
  const { open, handleClose, label } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="!font-bold !text-2xl"
            style={lexend.style}
          >
            {label}
          </Typography>
          <Divider className="!mt-3" />
          <div className="flex justify-between !mt-3">
            <p>Total Amount</p>
            <p>&#8377;20000</p>
          </div>
          <div className="flex justify-between !mt-3">
            <p>Amount Paid</p>
            <p>&#8377;10000</p>
          </div>
          <Divider className="!mt-3" />
          <div className="flex justify-between !mt-3">
            <p>Advance</p>
            <p>&#8377;10000</p>
          </div>
          <TextField
            label="Amount"
            fullWidth
            className="!mt-3"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">&#8377;</InputAdornment>
                ),
              },
            }}
          />
          <Button
            variant="contained"
            className="!mt-5"
            fullWidth
            style={lexend.style}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditGroupExpenseModal;
