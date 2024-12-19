"use client";
import { PRODUCT_NAME } from "@/utils/constants";
import { crimsonPro, lexend } from "@/utils/fonts";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

const SignUpPage = () => {
  return (
    <Card
      className="w-2/5 absolute top-2/4 left-2/4"
      sx={{ transform: "translate(-50%, -50%)" }}
    >
      <CardContent>
        <p
          className={`text-center !mb-6 !text-xl !font-semibold ${lexend.className}`}
        >
          {PRODUCT_NAME}
        </p>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <TextField label="Email/Phone number" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Confirm Password" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              className="!mt-7 !text-base"
              fullWidth
              style={crimsonPro.style}
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
