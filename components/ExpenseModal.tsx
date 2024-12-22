"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, InputAdornment, TextField } from "@mui/material";
import {
  BUTTON_TYPES,
  EXPENSE_MODAL_TYPES,
  EXPENSES_CATEGORY_MENU_ITEMS,
  KEYS_OF_ERROR_SLICE,
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
import {
  addExpenseSchema,
  addGroupExpenseSchema,
} from "@/validations/expenseValidations";
import {
  errorSliceInitialState,
  updateErrorSlice,
} from "@/store/slices/errorSlice";
import addExpense from "@/store/thunks/addExpense";
import deleteExpense from "@/store/thunks/deleteExpense";

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
  overflowY: "auto",
  maxHeight: "90vh",
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

  const expenseErrors = useSelector(
    (state: RootState) => state.errorSlice.expenseErrors
  );

  const handleModalClose = () => {
    dispatch(
      updateErrorSlice({
        key: KEYS_OF_ERROR_SLICE.expenseErrors,
        value: errorSliceInitialState.expenseErrors,
      })
    );
    handleClose();
  };

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
          date: formattedDate === "Invalid Date" ? "" : formattedDate,
        },
      })
    );
  };

  const validateExpenseData = async () => {
    try {
      const schema =
        page === "group-expense" ? addGroupExpenseSchema : addExpenseSchema;
      await schema.validate(expenseDetails, { abortEarly: false });
      dispatch(
        updateErrorSlice({
          key: KEYS_OF_ERROR_SLICE.expenseErrors,
          value: errorSliceInitialState.expenseErrors,
        })
      );
      return true;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const fieldErrors: { [key: string]: string } = {};
      error.inner.forEach((err: { path: string; message: string }) => {
        fieldErrors[err.path] = err.message;
      });
      dispatch(
        updateErrorSlice({
          key: KEYS_OF_ERROR_SLICE.expenseErrors,
          value: fieldErrors,
        })
      );
      return false;
    }
  };

  const onButtonClick = async (type: string) => {
    switch (type) {
      case BUTTON_TYPES.add:
      case BUTTON_TYPES.update:
        const isValid = await validateExpenseData();
        if (isValid) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const response: any = await dispatch(
            addExpense(page === "group-expense" ? true : false)
          );
          if (response?.payload === 201) {
            handleModalClose();
            dispatch(clearExpenseDetails());
          }
        }
        break;
      case BUTTON_TYPES.delete:
        await dispatch(deleteExpense(expenseDetails.expenseId));
        handleModalClose();
        dispatch(clearExpenseDetails());
        break;
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleModalClose}
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
            value={expenseDetails.expenseName}
            onChange={(e) => handleFieldChange(e, "expenseName")}
            error={Boolean(expenseErrors.expenseName)}
            helperText={expenseErrors.expenseName}
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
              error={Boolean(expenseErrors.paymentType)}
              helperText={expenseErrors.paymentType}
            />
          )}
          <TextField
            label="Amount"
            fullWidth
            type="number"
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
            error={Boolean(expenseErrors.amount)}
            helperText={expenseErrors.amount}
          />
          <DropDown
            label="Category"
            value={expenseDetails.category}
            fullWidth
            className="!mt-3"
            menuItems={EXPENSES_CATEGORY_MENU_ITEMS}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => handleFieldChange(e, "category")}
            error={Boolean(expenseErrors.category)}
            helperText={expenseErrors.category}
          />
          <DropDown
            label="Payment Method"
            value={expenseDetails.paymentMethod}
            fullWidth
            className="!mt-3"
            menuItems={PAYMENT_METHODS_MENU_ITEMS}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => handleFieldChange(e, "paymentMethod")}
            error={Boolean(expenseErrors.paymentMethod)}
            helperText={expenseErrors.paymentMethod}
          />
          <DatePicker
            label="Date"
            className="!mt-1"
            fullWidth
            value={expenseDetails.date}
            onChange={dateChangeHandler}
            error={Boolean(expenseErrors.date)}
            helperText={expenseErrors.date}
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
