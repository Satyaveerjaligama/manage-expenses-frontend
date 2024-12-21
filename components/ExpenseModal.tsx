"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, InputAdornment, TextField } from "@mui/material";
import {
  BUTTON_TYPES,
  EXPENSE_MODAL_TYPES,
  EXPENSES_CATEGORY_MENU_ITEMS,
  KEYS_OF_EXPENSE_SLICE,
  PAYMENT_METHODS_MENU_ITEMS,
  PAYMENT_TYPE_MENU_ITEMS,
} from "@/utils/constants";
import DropDown from "./DropDown";
import DatePicker from "./DatePicker";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { lexend } from "@/utils/fonts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  clearExpenseDetails,
  updateExpenseSlice,
} from "@/store/slices/expenseSlice";
import dayjs from "dayjs";

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
  page: "personal-expense" | "group-expense";
}

const ExpenseModal = (props: ExpenseModalProps) => {
  const { open, handleClose, modalType, page } = props;
  const dispatch = useDispatch<AppDispatch>();
  const { expenseDetails } = useSelector(
    (state: RootState) => state.expenseSlice
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFieldChange = (e: any, key: string) => {
    dispatch(
      updateExpenseSlice({
        key: KEYS_OF_EXPENSE_SLICE.expenseDetails,
        value: { ...expenseDetails, [key]: e.target.value },
      })
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dateChangeHandler = (date: any) => {
    const formattedDate = dayjs(date).format("DD/MM/YYYY");
    dispatch(
      updateExpenseSlice({
        key: KEYS_OF_EXPENSE_SLICE.expenseDetails,
        value: {
          ...expenseDetails,
          data: formattedDate === "Invalid Date" ? "" : formattedDate,
        },
      })
    );
  };

  const onButtonClick = (type: string) => {
    switch (type) {
      case BUTTON_TYPES.add:
        // TODO --> Validations, API call
        handleClose();
        dispatch(clearExpenseDetails());
        break;
      case BUTTON_TYPES.delete:
        // TODO --> API call
        handleClose();
        dispatch(clearExpenseDetails());
        break;
      case BUTTON_TYPES.update:
        // TODO --> Validations, API call
        handleClose();
        dispatch(clearExpenseDetails());
        break;
    }
  };

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
            {modalType === EXPENSE_MODAL_TYPES.add
              ? "Add Expense"
              : "Edit Expense"}
          </Typography>
          <TextField
            label="Label"
            fullWidth
            className="!mt-3"
            value={expenseDetails.label}
            onChange={(e) => handleFieldChange(e, "label")}
          />
          {/* Payment types should be displayed only in group expense case */}
          {page === "group-expense" && (
            <DropDown
              label="Payment Type"
              value={expenseDetails.paymentType}
              fullWidth
              className="!mt-3"
              menuItems={PAYMENT_TYPE_MENU_ITEMS}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e: any) => handleFieldChange(e, "paymentType")}
            />
          )}
          <TextField
            label="Amount"
            fullWidth
            className="!mt-3"
            value={expenseDetails.amount}
            onChange={(e) => handleFieldChange(e, "amount")}
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
            value={expenseDetails.category}
            fullWidth
            className="!mt-3"
            menuItems={EXPENSES_CATEGORY_MENU_ITEMS}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => handleFieldChange(e, "category")}
          />
          <DropDown
            label="Payment Method"
            value={expenseDetails.paymentMethod}
            fullWidth
            className="!mt-3"
            menuItems={PAYMENT_METHODS_MENU_ITEMS}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => handleFieldChange(e, "paymentMethod")}
          />
          <DatePicker
            label="Date"
            className="!mt-1"
            fullWidth
            value={expenseDetails.date}
            onChange={dateChangeHandler}
          />
          {modalType === EXPENSE_MODAL_TYPES.add ? (
            <Button
              startIcon={<AddRoundedIcon />}
              variant="contained"
              className="!mt-7 !text-base"
              fullWidth
              style={lexend.style}
              onClick={() => onButtonClick("add")}
            >
              Add
            </Button>
          ) : (
            <div className="!mt-7">
              <Button
                variant="outlined"
                fullWidth
                endIcon={<DeleteRoundedIcon />}
                style={lexend.style}
                className="!text-base"
                onClick={() => onButtonClick("delete")}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                className="!mt-3 !text-base"
                fullWidth
                endIcon={<EastRoundedIcon />}
                style={lexend.style}
                onClick={() => onButtonClick("update")}
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
