"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import {
  BUTTON_TYPES,
  GROUP_MODAL_TYPES,
  KEYS_OF_ERROR_SLICE,
  KEYS_OF_GROUP_EXPENSE_SLICE,
} from "@/utils/constants";
import { lexend } from "@/utils/fonts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  groupExpenseSliceInitialState,
  updateGroupExpenseSlice,
} from "@/store/slices/groupExpenseSlice";
import {
  createGroupSchema,
  joinGroupSchema,
} from "@/validations/groupExpenseValidations";
import {
  errorSliceInitialState,
  updateErrorSlice,
} from "@/store/slices/errorSlice";
import createGroup from "@/store/thunks/createGroup";
import updateGroup from "@/store/thunks/updateGroup";
import deleteGroup from "@/store/thunks/deleteGroup";
import joinGroup from "@/store/thunks/joinGroup";

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

interface GroupModalProps {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClose: any;
  modalType: string;
}

const GroupModal = (props: GroupModalProps) => {
  const { open, handleClose, modalType } = props;
  const dispatch = useDispatch<AppDispatch>();

  const { groupCode, groupName } = useSelector(
    (state: RootState) => state.groupExpenseSlice
  );

  const { createGroupErrors, joinGroupErrors } = useSelector(
    (state: RootState) => state.errorSlice
  );

  const handleModalClose = () => {
    handleClose();
    dispatch(
      updateGroupExpenseSlice({
        key: KEYS_OF_GROUP_EXPENSE_SLICE.groupName,
        value: groupExpenseSliceInitialState.groupName,
      })
    );
    dispatch(
      updateGroupExpenseSlice({
        key: KEYS_OF_GROUP_EXPENSE_SLICE.groupCode,
        value: groupExpenseSliceInitialState.groupCode,
      })
    );
    dispatch(
      updateErrorSlice({
        key: KEYS_OF_ERROR_SLICE.createGroupErrors,
        value: errorSliceInitialState.createGroupErrors,
      })
    );
    dispatch(
      updateErrorSlice({
        key: KEYS_OF_ERROR_SLICE.joinGroupErrors,
        value: errorSliceInitialState.joinGroupErrors,
      })
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFieldChange = (e: any, key: string) => {
    dispatch(
      updateGroupExpenseSlice({
        key,
        value: e.target.value,
      })
    );
  };

  const validateGroupName = async () => {
    try {
      await createGroupSchema.validate({ groupName }, { abortEarly: false });
      dispatch(
        updateErrorSlice({
          key: KEYS_OF_ERROR_SLICE.createGroupErrors,
          value: errorSliceInitialState.createGroupErrors,
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
          key: KEYS_OF_ERROR_SLICE.createGroupErrors,
          value: fieldErrors,
        })
      );
      return false;
    }
  };

  const validateGroupCode = async () => {
    try {
      await joinGroupSchema.validate({ groupCode }, { abortEarly: false });
      dispatch(
        updateErrorSlice({
          key: KEYS_OF_ERROR_SLICE.joinGroupErrors,
          value: errorSliceInitialState.joinGroupErrors,
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
          key: KEYS_OF_ERROR_SLICE.joinGroupErrors,
          value: fieldErrors,
        })
      );
      return false;
    }
  };

  const onButtonClick = async (type: string) => {
    let isValid = false;
    switch (type) {
      case BUTTON_TYPES.create:
        isValid = await validateGroupName();
        if (isValid) {
          await dispatch(createGroup());
          handleModalClose();
        }
        break;
      case BUTTON_TYPES.delete:
        await dispatch(deleteGroup());
        handleModalClose();
        break;
      case BUTTON_TYPES.update:
        isValid = await validateGroupName();
        if (isValid) {
          await dispatch(updateGroup());
          handleModalClose();
        }
        break;
      case BUTTON_TYPES.join:
        isValid = await validateGroupCode();
        if (isValid) {
          await dispatch(joinGroup());
          handleModalClose();
        }
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
            style={lexend.style}
            className="!font-bold !text-2xl"
          >
            {modalType === GROUP_MODAL_TYPES.create
              ? "Create Group"
              : modalType === GROUP_MODAL_TYPES.join
              ? "Join Group"
              : "Edit Group"}
          </Typography>
          {modalType === GROUP_MODAL_TYPES.join ? (
            <TextField
              label="Group code"
              fullWidth
              className="!mt-3"
              value={groupCode}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e: any) =>
                handleFieldChange(e, KEYS_OF_GROUP_EXPENSE_SLICE.groupCode)
              }
              error={Boolean(joinGroupErrors.groupCode)}
              helperText={joinGroupErrors.groupCode}
            />
          ) : (
            <TextField
              label="Group name"
              fullWidth
              className="!mt-3"
              value={groupName}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e: any) =>
                handleFieldChange(e, KEYS_OF_GROUP_EXPENSE_SLICE.groupName)
              }
              error={Boolean(createGroupErrors.groupName)}
              helperText={createGroupErrors.groupName}
            />
          )}
          {modalType === GROUP_MODAL_TYPES.create ? (
            <Button
              variant="contained"
              className="!mt-7 !text-base"
              fullWidth
              style={lexend.style}
              onClick={() => onButtonClick(BUTTON_TYPES.create)}
            >
              Create
            </Button>
          ) : modalType === GROUP_MODAL_TYPES.join ? (
            <Button
              variant="contained"
              className="!mt-7 !text-base"
              fullWidth
              style={lexend.style}
              onClick={() => onButtonClick(BUTTON_TYPES.join)}
            >
              Join
            </Button>
          ) : (
            <div className="!mt-7">
              <Button
                variant="outlined"
                fullWidth
                style={lexend.style}
                className="!text-base"
                onClick={() => onButtonClick(BUTTON_TYPES.delete)}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                className="!mt-3 !text-base"
                fullWidth
                style={lexend.style}
                onClick={() => onButtonClick(BUTTON_TYPES.update)}
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

export default GroupModal;
