"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import { EXPENSE_MODAL_TYPES } from "@/utils/constants";

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

interface ExpenseModalProps {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClose: any;
  modalType: string;
}

const ExpenseModal = (props: ExpenseModalProps) => {
  const { open, handleClose, modalType } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalType === EXPENSE_MODAL_TYPES.add
              ? "Add Expense"
              : "Edit Expense"}
          </Typography>
          <TextField label="Label" fullWidth className="!mt-3" />
          <TextField label="Amount" fullWidth className="!mt-3" />
          <TextField label="Category" fullWidth className="!mt-3" />
          <TextField label="Payment Method" fullWidth className="!mt-3" />
          <TextField label="Date" fullWidth className="!mt-3" />
          {modalType === EXPENSE_MODAL_TYPES.add ? (
            <Button variant="contained" className="!mt-7" fullWidth>
              Add
            </Button>
          ) : (
            <div className="!mt-7">
              <Button variant="outlined" fullWidth>
                Delete
              </Button>
              <Button variant="contained" className="!mt-3" fullWidth>
                Update
              </Button>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ExpenseModal;
