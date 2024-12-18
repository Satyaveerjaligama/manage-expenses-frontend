"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import { GROUP_MODAL_TYPES } from "@/utils/constants";

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
            {modalType === GROUP_MODAL_TYPES.create
              ? "Create Group"
              : modalType === GROUP_MODAL_TYPES.join
              ? "Join Group"
              : "Edit Group"}
          </Typography>
          <TextField
            label={
              modalType === GROUP_MODAL_TYPES.join ? "Group code" : "Group name"
            }
            fullWidth
            className="!mt-3"
          />
          {modalType === GROUP_MODAL_TYPES.create ? (
            <Button variant="contained" className="!mt-7" fullWidth>
              Create
            </Button>
          ) : modalType === GROUP_MODAL_TYPES.join ? (
            <Button variant="contained" className="!mt-7" fullWidth>
              Join
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

export default GroupModal;