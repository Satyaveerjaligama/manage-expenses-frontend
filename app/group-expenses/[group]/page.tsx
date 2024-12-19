"use client";
import Header from "@/components/Header";
import { Button, Divider, Grid, IconButton } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { useState } from "react";
import { EXPENSE_MODAL_TYPES } from "@/utils/constants";
import SummarySection from "@/components/SummarySection";
import ExpenseModal from "@/components/ExpenseModal";
import ExpenseCard from "@/components/ExpenseCard";
import EditGroupExpenseModal from "./EditGroupExpenseModa";
import IncomingRequestsModal from "./IncomingRequestsModal";

const GroupPage = () => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState(EXPENSE_MODAL_TYPES.add);
  const [openGroupExpenseModal, setOpenGroupExpenseModal] = useState(false);
  const [openIncomingRequestsModal, setOpenIncomingRequestsModal] =
    useState(false);
  const handleOpen = (incomingModalType: string) => {
    setModalType(incomingModalType);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      <SummarySection />
      <Divider className="!mt-3 !border-white justify-self-center w-11/12" />
      <Button onClick={() => setOpenIncomingRequestsModal(true)}>
        Incoming Requests (2)
      </Button>
      <Grid container rowSpacing={2} columnSpacing={2} className="!mt-1 px-5">
        <Grid item xs={12} sm={6} md={4}>
          <ExpenseCard
            label="Sample"
            amount={100}
            date="18-Dec"
            handleOpen={() => setOpenGroupExpenseModal(true)}
          />
        </Grid>
      </Grid>
      <ExpenseModal
        open={open}
        handleClose={handleClose}
        modalType={modalType}
      />
      <EditGroupExpenseModal
        label="label"
        open={openGroupExpenseModal}
        handleClose={() => setOpenGroupExpenseModal(false)}
      />
      <IncomingRequestsModal
        open={openIncomingRequestsModal}
        handleClose={() => setOpenIncomingRequestsModal(false)}
      />
      <IconButton
        className="!absolute bottom-4 right-4"
        onClick={() => handleOpen(EXPENSE_MODAL_TYPES.add)}
      >
        <AddCircleRoundedIcon className="!text-6xl text-white" />
      </IconButton>
    </>
  );
};

export default GroupPage;
