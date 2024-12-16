'use client';
import Avatar from "@/components/Avatar";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export default function Home() {
  return (
  <Card className="mt-5">
    <CardContent>
      <Grid container rowSpacing={2} columnSpacing={2} className="items-center">
        <Grid item xs={12} md={1.5}>
        <Typography>Logo area</Typography>
        </Grid>
        <Grid item xs={12} md={1.5}>
        <Typography className="cursor-pointer">Personal Expenses</Typography>
        </Grid>
        <Grid item xs={12} md={1.5}>
        <Typography className="cursor-pointer">Group Expenses</Typography>
        </Grid>
        <Grid item xs={12} md={7.5} className="text-right">
        <AccountCircleRoundedIcon className="cursor-pointer"/>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  );
}
