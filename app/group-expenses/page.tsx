"use client";
import Header from "@/components/Header";
import { Button, Grid, IconButton } from "@mui/material";
import GroupCard from "./GroupCard";
import { useState } from "react";
import { GROUP_MODAL_TYPES } from "@/utils/constants";
import GroupModal from "./GroupModal";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const GroupExpensesPage = () => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState(GROUP_MODAL_TYPES.create);
  const handleOpen = (incomingModalType: string) => {
    setModalType(incomingModalType);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      <div className="text-right mt-3">
        <Button
          variant="outlined"
          onClick={() => handleOpen(GROUP_MODAL_TYPES.join)}
        >
          Join Group
        </Button>
      </div>
      <Grid container rowSpacing={2} columnSpacing={2} className="!mt-3 px-5">
        <Grid item xs={12} sm={6} md={4}>
          <GroupCard
            groupLabel="Sample Group label"
            members={8}
            handleOpen={handleOpen}
          />
        </Grid>
      </Grid>
      <GroupModal handleClose={handleClose} open={open} modalType={modalType} />
      <IconButton
        className="!absolute bottom-4 right-4"
        onClick={() => handleOpen(GROUP_MODAL_TYPES.create)}
      >
        <AddCircleRoundedIcon className="!text-6xl text-white" />
      </IconButton>
    </>
  );
};

export default GroupExpensesPage;
