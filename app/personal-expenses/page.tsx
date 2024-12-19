"use client";
import Header from "@/components/Header";
import SummarySection from "../../components/SummarySection";
import { Divider, Grid, IconButton } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import ExpenseModal from "../../components/ExpenseModal";
import { useState } from "react";
import { EXPENSE_MODAL_TYPES } from "@/utils/constants";
import ExpenseCard from "@/components/ExpenseCard";

const PersonalExpensesPage = () => {
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
      <Divider className="!mt-3 !border-white justify-self-center w-11/12" />
      <Grid container rowSpacing={2} columnSpacing={2} className="!mt-5 px-5">
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
        <AddCircleRoundedIcon className="!text-6xl text-white" />
      </IconButton>
    </>
  );
};

export default PersonalExpensesPage;
