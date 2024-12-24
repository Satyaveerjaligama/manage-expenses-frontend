import { clearCentralDataSlice } from "@/store/slices/centralDataSlice";
import { clearErrorSlice } from "@/store/slices/errorSlice";
import { clearExpenseDetails } from "@/store/slices/expenseSlice";
import { clearGroupExpenseSlice } from "@/store/slices/groupExpenseSlice";
import { clearUtilitySlice } from "@/store/slices/utilitySlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ClearReduxData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCentralDataSlice());
    dispatch(clearErrorSlice());
    dispatch(clearExpenseDetails());
    dispatch(clearGroupExpenseSlice());
    dispatch(clearUtilitySlice());
  }, []);
  return null;
};

export default ClearReduxData;
