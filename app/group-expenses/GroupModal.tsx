"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import {
  BUTTON_TYPES,
  GROUP_MODAL_TYPES,
  KEYS_OF_GROUP_EXPENSE_SLICE,
} from "@/utils/constants";
import { lexend } from "@/utils/fonts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { updateGroupExpenseSlice } from "@/store/slices/groupExpenseSlice";

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFieldChange = (e: any, key: string) => {
    dispatch(
      updateGroupExpenseSlice({
        key,
        value: e.target.value,
      })
    );
  };

  const onButtonClick = (type: string) => {
    switch (type) {
      case BUTTON_TYPES.create:
        // TODO --> Validations, API call
        handleClose();
        dispatch(
          updateGroupExpenseSlice({
            key: KEYS_OF_GROUP_EXPENSE_SLICE.groupName,
            value: "",
          })
        );
        break;
      case BUTTON_TYPES.delete:
        // TODO --> API call
        handleClose();
        dispatch(
          updateGroupExpenseSlice({
            key: KEYS_OF_GROUP_EXPENSE_SLICE.groupName,
            value: "",
          })
        );
        break;
      case BUTTON_TYPES.update:
        // TODO --> Validations, API call
        handleClose();
        dispatch(
          updateGroupExpenseSlice({
            key: KEYS_OF_GROUP_EXPENSE_SLICE.groupName,
            value: "",
          })
        );
        break;
      case BUTTON_TYPES.join:
        // TODO --> Validations, API call
        handleClose();
        dispatch(
          updateGroupExpenseSlice({
            key: KEYS_OF_GROUP_EXPENSE_SLICE.groupCode,
            value: "",
          })
        );
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
