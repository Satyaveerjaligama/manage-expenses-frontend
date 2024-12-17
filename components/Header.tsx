"use client";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Header = () => {
  return (
    <Card className="mt-5">
      <CardContent>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2}
          className="items-center"
        >
          <Grid item xs={12} md={6}>
            <Typography>Logo area</Typography>
          </Grid>
          <Grid item xs={12} md={6} className="text-right">
            <AccountCircleRoundedIcon className="cursor-pointer" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Header;
