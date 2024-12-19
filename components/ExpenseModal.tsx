"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, InputAdornment, TextField } from "@mui/material";
import {
  EXPENSE_MODAL_TYPES,
  EXPENSES_CATEGORY_MENU_ITEMS,
  PAYMENT_METHODS_MENU_ITEMS,
  PAYMENT_TYPE_MENU_ITEMS,
} from "@/utils/constants";
import DropDown from "./DropDown";
import DatePicker from "./DatePicker";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
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
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="!font-bold !text-2xl"
            style={crimsonPro.style}
          >
            {modalType === EXPENSE_MODAL_TYPES.add
              ? "Add Expense"
              : "Edit Expense"}
          </Typography>
          <TextField label="Label" fullWidth className="!mt-3" />
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
          <DropDown
            label="Category"
            value=""
            fullWidth
            className="!mt-3"
            menuItems={EXPENSES_CATEGORY_MENU_ITEMS}
          />
          <DropDown
            label="Payment Method"
            value=""
            fullWidth
            className="!mt-3"
            menuItems={PAYMENT_METHODS_MENU_ITEMS}
          />
          {/* Payment types should be displayed only in group expense case */}
          <DropDown
            label="Payment Type"
            value=""
            fullWidth
            className="!mt-3"
            menuItems={PAYMENT_TYPE_MENU_ITEMS}
          />
          <DatePicker label="Date" className="!mt-1" fullWidth />
          {modalType === EXPENSE_MODAL_TYPES.add ? (
            <Button
              startIcon={<AddRoundedIcon />}
              variant="contained"
              className="!mt-7 !text-base"
              fullWidth
              style={crimsonPro.style}
            >
              Add
            </Button>
          ) : (
            <div className="!mt-7">
              <Button
                variant="outlined"
                fullWidth
                endIcon={<DeleteRoundedIcon />}
                style={crimsonPro.style}
                className="!text-base"
              >
                Delete
              </Button>
              <Button
                variant="contained"
                className="!mt-3 !text-base"
                fullWidth
                endIcon={<EastRoundedIcon />}
                style={crimsonPro.style}
              >
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
