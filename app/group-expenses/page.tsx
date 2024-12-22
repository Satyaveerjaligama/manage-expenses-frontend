"use client";
import Header from "@/components/Header";
import { Grid, IconButton } from "@mui/material";
import GroupCard from "./GroupCard";
import { useEffect, useState } from "react";
import {
  GROUP_MODAL_TYPES,
  KEYS_OF_GROUP_EXPENSE_SLICE,
} from "@/utils/constants";
import GroupModal from "./GroupModal";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { lexend } from "@/utils/fonts";
import getUserGroups from "@/store/thunks/getUserGroups";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  groupExpenseSliceInitialState,
  updateGroupExpenseSlice,
} from "@/store/slices/groupExpenseSlice";

const GroupExpensesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState(GROUP_MODAL_TYPES.create);
  const userId = useSelector(
    (state: RootState) => state.centralDataSlice.userId
  );
  const groupsList = useSelector(
    (state: RootState) => state.groupExpenseSlice.groupsList
  );
  const handleOpen = (incomingModalType: string) => {
    setModalType(incomingModalType);
    setOpen(true);
  };
  const handleClose = () => {
    dispatch(
      updateGroupExpenseSlice({
        key: KEYS_OF_GROUP_EXPENSE_SLICE.groupCode,
        value: groupExpenseSliceInitialState.groupCode,
      })
    );
    dispatch(
      updateGroupExpenseSlice({
        key: KEYS_OF_GROUP_EXPENSE_SLICE.groupName,
        value: groupExpenseSliceInitialState.groupName,
      })
    );
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getUserGroups(userId));
  }, []);

  return (
    <>
      <Header />
      <p
        className={`text-3xl text-center !mb-5 underline text-white ${lexend.className}`}
      >
        Groups
      </p>
      <div className="text-right mt-3 px-5">
        <p
          className="hover:underline cursor-pointer text-sky-600"
          onClick={() => handleOpen(GROUP_MODAL_TYPES.join)}
        >
          Join Group
        </p>
      </div>
      <Grid container rowSpacing={2} columnSpacing={2} className="!mt-3 px-5">
        {groupsList.map((group) => (
          <Grid item xs={12} sm={6} md={4} key={group.groupId}>
            <GroupCard
              groupLabel={group.groupName}
              members={group.members.length + 1}
              handleOpen={(modalType: string) => {
                dispatch(
                  updateGroupExpenseSlice({
                    key: KEYS_OF_GROUP_EXPENSE_SLICE.groupCode,
                    value: group.groupId,
                  })
                );
                dispatch(
                  updateGroupExpenseSlice({
                    key: KEYS_OF_GROUP_EXPENSE_SLICE.groupName,
                    value: group.groupName,
                  })
                );
                handleOpen(modalType);
              }}
            />
          </Grid>
        ))}
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
