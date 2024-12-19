"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Divider, InputAdornment, TextField } from "@mui/material";
import { crimsonPro } from "@/utils/fonts";

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
            style={crimsonPro.style}
          >
            {label}
          </Typography>
          <Divider className="!mt-3" />
          <div className="flex justify-between !mt-3">
            <Typography>Total Amount</Typography>
            <Typography>&#8377;20000</Typography>
          </div>
          <div className="flex justify-between !mt-3">
            <Typography>Amount Paid</Typography>
            <Typography>&#8377;10000</Typography>
          </div>
          <Divider className="!mt-3" />
          <div className="flex justify-between !mt-3">
            <Typography>Advance</Typography>
            <Typography>&#8377;10000</Typography>
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
          <Button variant="contained" className="!mt-5" fullWidth>
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditGroupExpenseModal;
