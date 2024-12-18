"use client";
import Header from "@/components/Header";
import { Button, Grid, IconButton } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { useState } from "react";
import { EXPENSE_MODAL_TYPES } from "@/utils/constants";
import SummarySection from "@/components/SummarySection";
import ExpenseModal from "@/components/ExpenseModal";
import ExpenseCard from "@/components/ExpenseCard";

const GroupPage = () => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState(EXPENSE_MODAL_TYPES.add);
  const handleOpen = (incomingModalType: string) => {
    setModalType(incomingModalType);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      <SummarySection />
      <div className="flex justify-between mt-3">
        <Button>Incoming Requests (2)</Button>
        <Button>Filters</Button>
      </div>
      <Grid container rowSpacing={2} columnSpacing={2} className="!mt-1">
        <Grid item xs={12} sm={6} md={4}>
          <ExpenseCard
            label="Sample"
            amount={100}
            date="18-Dec"
            handleOpen={handleOpen}
          />
        </Grid>
      </Grid>
      <ExpenseModal
        open={open}
        handleClose={handleClose}
        modalType={modalType}
      />
      <IconButton
        className="!absolute bottom-4 right-4"
        onClick={() => handleOpen(EXPENSE_MODAL_TYPES.add)}
      >
        <AddCircleRoundedIcon className="!text-6xl" />
      </IconButton>
    </>
  );
};

export default GroupPage;
