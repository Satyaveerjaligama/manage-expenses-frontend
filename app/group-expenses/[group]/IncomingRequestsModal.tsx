"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { lexend } from "@/utils/fonts";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import React from "react";
import processJoinRequests from "@/store/thunks/processJoinRequest";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: any;
}

const IncomingRequestsModal = (props: IncomingRequestsModalProps) => {
  const { open, handleClose, dispatch } = props;
  const { groupJoiningRequestsList } = useSelector(
    (state: RootState) => state.groupExpenseSlice
  );

  const handleActionButton = async (
    action: "approve" | "delete",
    userId: string
  ) => {
    await dispatch(processJoinRequests({ action, userId }));
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
            className="!font-bold !text-xl"
            style={lexend.style}
          >
            Incoming Requests
          </Typography>
          {groupJoiningRequestsList.map((request) => (
            <React.Fragment key={request.userId}>
              <Divider className="!mt-3" />
              <div className="flex justify-between !mt-3">
                <Typography style={lexend.style}>{request.userName}</Typography>
                <div>
                  <IconButton
                    className="!text-green-500"
                    onClick={() =>
                      handleActionButton("approve", request.userId)
                    }
                  >
                    <DoneRoundedIcon />
                  </IconButton>
                  <IconButton
                    className="!text-rose-600"
                    onClick={() => handleActionButton("delete", request.userId)}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                </div>
              </div>
            </React.Fragment>
          ))}
        </Box>
      </Modal>
    </div>
  );
};

export default IncomingRequestsModal;
