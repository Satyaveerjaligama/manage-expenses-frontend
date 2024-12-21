import { REGULAR_EXPRESSIONS } from "@/utils/constants";
import * as yup from "yup";

export const createGroupSchema = yup.object().shape({
  groupName: yup
    .string()
    .matches(
      REGULAR_EXPRESSIONS.LETTERS_AND_NUMBERS,
      "Only letters and numbers are allowed"
    )
    .max(30, "Group name should not exceed 30 characters")
    .min(5, "Group name should be atleast 5 characters")
    .required("Group name is required"),
});

export const joinGroupSchema = yup.object().shape({
  groupCode: yup
    .string()
    .matches(REGULAR_EXPRESSIONS.NUMBERS, "Only numbers are allowed")
    .length(6, "Group code should of 6 digits")
    .required("Group code is required"),
});
