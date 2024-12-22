import { REGULAR_EXPRESSIONS } from "@/utils/constants";
import * as yup from "yup";

export const addExpenseSchema = yup.object().shape({
  expenseName: yup
    .string()
    .matches(
      REGULAR_EXPRESSIONS.LETTERS_AND_NUMBERS,
      "Only letters and number are allowed"
    )
    .max(30, "Label should not exceed 30 characters")
    .min(3, "Label should be atleast 3 characters")
    .required("Label is required"),
  amount: yup.string().required("Amount is required"),
  category: yup.string().required("Category is required"),
  paymentMethod: yup.string().required("Payment method is required"),
  date: yup.string().required("Date is required"),
});

export const addGroupExpenseSchema = addExpenseSchema.shape({
  paymentType: yup.string().required("Payment method is required"),
});

export const addAmountSchema = yup.object().shape({
  amount: yup.string().required("Amount is required"),
});
