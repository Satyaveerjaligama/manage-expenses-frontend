"use client";
import {
  centralDataSliceInitialState,
  updateCentralDataSlice,
} from "@/store/slices/centralDataSlice";
import {
  errorSliceInitialState,
  updateErrorSlice,
} from "@/store/slices/errorSlice";
import { AppDispatch, RootState } from "@/store/store";
import signup from "@/store/thunks/signup";
import {
  KEYS_OF_CENTRAL_DATA_SLICE,
  KEYS_OF_ERROR_SLICE,
  PRODUCT_NAME,
} from "@/utils/constants";
import { lexend } from "@/utils/fonts";
import { routes } from "@/utils/routes";
import signupSchema from "@/validations/signupValidations";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SignUpPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { userName, emailOrPhoneNumber, password, confirmPassword } =
    useSelector((state: RootState) => state.centralDataSlice);

  const signUpErrors = useSelector(
    (state: RootState) => state.errorSlice.signupErrors
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFieldChange = (e: any, key: string) => {
    dispatch(updateCentralDataSlice({ key, value: e.target.value }));
  };

  const signupButtonClick = async () => {
    try {
      await signupSchema.validate(
        { userName, emailOrPhoneNumber, password, confirmPassword },
        { abortEarly: false }
      );
      dispatch(
        updateErrorSlice({
          key: KEYS_OF_ERROR_SLICE.signupErrors,
          value: errorSliceInitialState.signupErrors,
        })
      );
      await dispatch(signup(router));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const fieldErrors: { [key: string]: string } = {};
      error.inner?.forEach((err: { path: string; message: string }) => {
        fieldErrors[err.path] = err.message;
      });
      dispatch(
        updateErrorSlice({
          key: KEYS_OF_ERROR_SLICE.signupErrors,
          value: fieldErrors,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(
      updateCentralDataSlice({
        key: KEYS_OF_CENTRAL_DATA_SLICE.userName,
        value: centralDataSliceInitialState.userName,
      })
    );
    dispatch(
      updateCentralDataSlice({
        key: KEYS_OF_CENTRAL_DATA_SLICE.emailOrPhoneNumber,
        value: centralDataSliceInitialState.emailOrPhoneNumber,
      })
    );
    dispatch(
      updateCentralDataSlice({
        key: KEYS_OF_CENTRAL_DATA_SLICE.password,
        value: centralDataSliceInitialState.password,
      })
    );
    dispatch(
      updateCentralDataSlice({
        key: KEYS_OF_CENTRAL_DATA_SLICE.confirmPassword,
        value: centralDataSliceInitialState.confirmPassword,
      })
    );
  }, []);

  return (
    <Card
      className="w-2/5 absolute top-2/4 left-2/4 login-signup-card"
      sx={{ transform: "translate(-50%, -50%)" }}
    >
      <CardContent className="!p-10">
        <p
          className={`text-center !mb-6 !text-xl !font-semibold ${lexend.className}`}
        >
          {PRODUCT_NAME}
        </p>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <TextField
              label="User name"
              fullWidth
              value={userName}
              onChange={(e) => handleFieldChange(e, "userName")}
              error={Boolean(signUpErrors.userName)}
              helperText={signUpErrors.userName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email/Phone number"
              fullWidth
              value={emailOrPhoneNumber}
              onChange={(e) => handleFieldChange(e, "emailOrPhoneNumber")}
              error={Boolean(signUpErrors.emailOrPhoneNumber)}
              helperText={signUpErrors.emailOrPhoneNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              fullWidth
              value={password}
              type="password"
              onChange={(e) => handleFieldChange(e, "password")}
              error={Boolean(signUpErrors.password)}
              helperText={signUpErrors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              fullWidth
              value={confirmPassword}
              type="password"
              onChange={(e) => handleFieldChange(e, "confirmPassword")}
              error={Boolean(signUpErrors.confirmPassword)}
              helperText={signUpErrors.confirmPassword}
            />
          </Grid>
          <p
            className="hover:underline cursor-pointer hover:text-sky-600 text-right w-full mt-4 text-sm"
            onClick={() => router.push(routes.login)}
          >
            Already have an account ?
          </p>
          <Grid item xs={12}>
            <Button
              variant="contained"
              className="!mt-7 !text-base"
              fullWidth
              style={lexend.style}
              onClick={signupButtonClick}
            >
              Signup
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SignUpPage;
