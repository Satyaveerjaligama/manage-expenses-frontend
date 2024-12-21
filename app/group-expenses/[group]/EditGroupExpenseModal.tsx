"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Divider, InputAdornment, TextField } from "@mui/material";
import { lexend } from "@/utils/fonts";
import { addAmountSchema } from "@/validations/expenseValidations";
import {
  errorSliceInitialState,
  updateErrorSlice,
} from "@/store/slices/errorSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { KEYS_OF_ERROR_SLICE, KEYS_OF_EXPENSE_SLICE } from "@/utils/constants";
import {
  expenseSliceInitialState,
  updateExpenseSlice,
} from "@/store/slices/expenseSlice";

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

interface EditGroupExpenseModalProps {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClose: any;
  label: string;
}

const EditGroupExpenseModal = (props: EditGroupExpenseModalProps) => {
  const { open, handleClose, label } = props;
  const dispatch = useDispatch<AppDispatch>();
  const expenseDetails = useSelector(
    (state: RootState) => state.expenseSlice?.expenseDetails
  );
  const addAmountErrors = useSelector(
    (state: RootState) => state.errorSlice?.addAmountErrors
  );

  // clearing everthing before closing the modal
  const handleModalClose = () => {
    dispatch(
      updateExpenseSlice({
        key: KEYS_OF_EXPENSE_SLICE.expenseDetails,
        value: expenseSliceInitialState.expenseDetails,
      })
    );
    dispatch(
      updateErrorSlice({
        key: KEYS_OF_ERROR_SLICE.addAmountErrors,
        value: errorSliceInitialState.addAmountErrors,
      })
    );
    handleClose();
  };

  // validations and API call
  const onAddClick = async () => {
    try {
      await addAmountSchema.validate(
        { amount: expenseDetails.amount },
        { abortEarly: false }
      );
      dispatch(
        updateErrorSlice({
          key: KEYS_OF_ERROR_SLICE.addAmountErrors,
          value: errorSliceInitialState.addAmountErrors,
        })
      );
      // TODO --> API call
      handleModalClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const fieldErrors: { [key: string]: string } = {};
      error.inner.forEach((err: { path: string; message: string }) => {
        fieldErrors[err.path] = err.message;
      });
      dispatch(
        updateErrorSlice({
          key: KEYS_OF_ERROR_SLICE.addAmountErrors,
          value: fieldErrors,
        })
      );
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeHandler = (e: any, key: string) => {
    dispatch(
      updateExpenseSlice({
        key: KEYS_OF_EXPENSE_SLICE.expenseDetails,
        value: { ...expenseDetails, [key]: e.target.value },
      })
    );
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
            onChange={(e) => onChangeHandler(e, "amount")}
            value={expenseDetails.amount}
            error={Boolean(addAmountErrors.amount)}
            helperText={addAmountErrors.amount}
          />
          <Button
            variant="contained"
            className="!mt-5"
            fullWidth
            style={lexend.style}
            onClick={onAddClick}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditGroupExpenseModal;
