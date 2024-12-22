"use client";
import Snackbar from "@/components/SnackBar";
import {
  centralDataSliceInitialState,
  updateCentralDataSlice,
} from "@/store/slices/centralDataSlice";
import {
  errorSliceInitialState,
  updateErrorSlice,
} from "@/store/slices/errorSlice";
import { updateUtilitySlice } from "@/store/slices/utilitySlice";
import { AppDispatch, RootState } from "@/store/store";
import login from "@/store/thunks/login";
import {
  KEYS_OF_CENTRAL_DATA_SLICE,
  KEYS_OF_ERROR_SLICE,
  KEYS_OF_UTILITY_SLICE,
  PRODUCT_NAME,
} from "@/utils/constants";
import { lexend } from "@/utils/fonts";
import { routes } from "@/utils/routes";
import loginSchema from "@/validations/loginValidations";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { emailOrPhoneNumber, password } = useSelector(
    (state: RootState) => state.centralDataSlice
  );

  const loginErrors = useSelector(
    (state: RootState) => state.errorSlice.loginErrors
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFieldChange = (e: any, key: string) => {
    dispatch(updateCentralDataSlice({ key, value: e.target.value }));
  };

  const loginButtonClick = async () => {
    try {
      await loginSchema.validate(
        { emailOrPhoneNumber, password },
        { abortEarly: false }
      );
      dispatch(
        updateErrorSlice({
          key: KEYS_OF_ERROR_SLICE.loginErrors,
          value: errorSliceInitialState.loginErrors,
        })
      );
      await dispatch(login(router));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const fieldErrors: { [key: string]: string } = {};
      error.inner?.forEach((err: { path: string; message: string }) => {
        fieldErrors[err.path] = err.message;
      });
      dispatch(
        updateErrorSlice({
          key: KEYS_OF_ERROR_SLICE.loginErrors,
          value: fieldErrors,
        })
      );
    }
  };

  useEffect(() => {
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
  }, []);

  return (
    <>
      <Snackbar />
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
                label="Email/Phone number"
                fullWidth
                value={emailOrPhoneNumber}
                onChange={(e) => handleFieldChange(e, "emailOrPhoneNumber")}
                error={Boolean(loginErrors.emailOrPhoneNumber)}
                helperText={loginErrors.emailOrPhoneNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                value={password}
                type="password"
                onChange={(e) => handleFieldChange(e, "password")}
                error={Boolean(loginErrors.password)}
                helperText={loginErrors.password}
              />
            </Grid>
            <Grid item xs={12} className="!flex !justify-between !text-sm">
              <p
                className="hover:underline cursor-pointer hover:text-sky-600"
                onClick={() => {
                  dispatch(
                    updateUtilitySlice({
                      key: KEYS_OF_UTILITY_SLICE.snackBar,
                      value: {
                        open: true,
                        message: "Functionality not available right now",
                        status: "info",
                      },
                    })
                  );
                }}
              >
                Forget Password
              </p>
              <p
                className="hover:underline cursor-pointer hover:text-sky-600"
                onClick={() => router.push(routes.signup)}
              >
                Create Account ?
              </p>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                className="!mt-7 !text-base"
                fullWidth
                style={lexend.style}
                onClick={loginButtonClick}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginPage;
