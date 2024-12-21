import { REGULAR_EXPRESSIONS } from "@/utils/constants";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  emailOrPhoneNumber: yup
    .string()
    .test(
      "emailOrPhoneNumber",
      "Enter valid Email or Phone number",
      (value) => {
        if (!value) return false;
        return (
          REGULAR_EXPRESSIONS.EMAIL.test(value) ||
          REGULAR_EXPRESSIONS.PHONE_NUMBER.test(value)
        );
      }
    )
    .required("Email/Phone Number is required"),
  password: yup
    .string()
    .max(20, "Password should not exceed 20 characters")
    .min(8, "Password should be at least 8 characters")
    .required("Password is required"),
});

export default loginSchema;
