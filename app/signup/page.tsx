"use client";
import { updateCentralDataSlice } from "@/store/slices/centralDataSlice";
import { AppDispatch, RootState } from "@/store/store";
import { PRODUCT_NAME } from "@/utils/constants";
import { lexend } from "@/utils/fonts";
import { routes } from "@/utils/routes";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const SignUpPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { userName, emailOrPhoneNumber, password, confirmPassword } =
    useSelector((state: RootState) => state.centralDataSlice);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFieldChange = (e: any, key: string) => {
    dispatch(updateCentralDataSlice({ key, value: e.target.value }));
  };

  const signupButtonClick = () => {
    // TODO --> Validations and API call
    router.push(routes.home);
  };

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
            />
          </Grid>
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
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              fullWidth
              value={confirmPassword}
              type="password"
              onChange={(e) => handleFieldChange(e, "confirmPassword")}
            />
          </Grid>
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
