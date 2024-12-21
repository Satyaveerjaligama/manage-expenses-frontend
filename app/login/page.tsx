"use client";
import Snackbar from "@/components/SnackBar";
import { updateCentralDataSlice } from "@/store/slices/centralDataSlice";
import { AppDispatch, RootState } from "@/store/store";
import { PRODUCT_NAME } from "@/utils/constants";
import { lexend } from "@/utils/fonts";
import { routes } from "@/utils/routes";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const { emailOrPhoneNumber, password } = useSelector(
    (state: RootState) => state.centralDataSlice
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFieldChange = (e: any, key: string) => {
    dispatch(updateCentralDataSlice({ key, value: e.target.value }));
  };

  const loginButtonClick = () => {
    // TODO --> Validations and API call
    router.push(routes.home);
  };

  return (
    <>
      <Snackbar open={open} setOpen={setOpen} message={snackBarMessage} />
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                value={password}
                type="password"
                onChange={(e) => handleFieldChange(e, "password")}
              />
            </Grid>
            <Grid item xs={12} className="!flex !justify-between !text-sm">
              <p
                className="hover:underline cursor-pointer hover:text-sky-600"
                onClick={() => {
                  setOpen(true);
                  setSnackBarMessage("Functionality not available right now");
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
