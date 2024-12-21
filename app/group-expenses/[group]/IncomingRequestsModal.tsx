"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
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

interface IncomingRequestsModalProps {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClose: any;
}

const IncomingRequestsModal = (props: IncomingRequestsModalProps) => {
  const { open, handleClose } = props;

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
            className="!font-bold !text-xl"
            style={lexend.style}
          >
            Incoming Requests
          </Typography>
          <Divider className="!mt-3" />
          <div className="flex justify-between !mt-3">
            <Typography style={lexend.style}>User one</Typography>
            <div>
              <IconButton className="!text-green-500">
                <DoneRoundedIcon />
              </IconButton>
              <IconButton className="!text-rose-600">
                <CloseRoundedIcon />
              </IconButton>
            </div>
          </div>
          <Divider className="!mt-3" />
          <div className="flex justify-between !mt-3">
            <Typography style={lexend.style}>User two</Typography>
            <div>
              <IconButton className="!text-green-500">
                <DoneRoundedIcon />
              </IconButton>
              <IconButton className="!text-rose-600">
                <CloseRoundedIcon />
              </IconButton>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default IncomingRequestsModal;
