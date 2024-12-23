"use client";
import Header from "@/components/Header";
import { Divider, Grid, IconButton } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { useState } from "react";
import { EXPENSE_MODAL_TYPES } from "@/utils/constants";
import SummarySection from "@/components/SummarySection";
import ExpenseModal from "@/components/ExpenseModal";
import ExpenseCard from "@/components/ExpenseCard";
import EditGroupExpenseModal from "./EditGroupExpenseModal";
import IncomingRequestsModal from "./IncomingRequestsModal";
import { lexend } from "@/utils/fonts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import fetchJoinRequests from "@/store/thunks/fetchJoinRequests";

const GroupPage = () => {
  const dispatch = useDispatch<AppDispatch>();
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
  const groupId = useSelector(
    (state: RootState) => state.groupExpenseSlice.groupCode
  );

  const handleIncomingRequestsClick = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await dispatch(fetchJoinRequests(groupId));
    if (response.payload === 200) {
      setOpenIncomingRequestsModal(true);
    }
  };
  return (
    <>
      <Header />
      <p
        className={`text-3xl text-center !mb-5 underline text-white ${lexend.className}`}
      >
        Group name
      </p>
      <SummarySection />
      <Divider className="!mt-3 !border-white justify-self-center w-11/12" />
      <p
        className="hover:underline cursor-pointer text-sky-600 px-5 mt-3"
        onClick={handleIncomingRequestsClick}
      >
        Incoming Requests
      </p>
      <Grid container rowSpacing={2} columnSpacing={2} className="!mt-1 px-5">
        <Grid item xs={12} sm={6} md={4}>
          <ExpenseCard
            label="Sample"
            amount={100}
            date="18-Dec"
            handleOpen={() => setOpenGroupExpenseModal(true)}
            paymentMethod="Debit or Credit card"
          />
        </Grid>
      </Grid>
      <ExpenseModal
        open={open}
        handleClose={handleClose}
        modalType={modalType}
        page="group-expense"
      />
      <EditGroupExpenseModal
        label="label"
        open={openGroupExpenseModal}
        handleClose={() => setOpenGroupExpenseModal(false)}
      />
      <IncomingRequestsModal
        open={openIncomingRequestsModal}
        handleClose={() => setOpenIncomingRequestsModal(false)}
        dispatch={dispatch}
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
