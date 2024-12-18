import { Card, CardContent, Grid, Typography } from "@mui/material";

const SummarySection = () => {
  return (
    <Card className="mt-5">
      <CardContent>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2}
          className="items-center text-center"
        >
          <Grid item xs={12} md={4}>
            <Typography>Today</Typography>
            <Typography>amount</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography>This Week</Typography>
            <Typography>amount</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography>This Month</Typography>
            <Typography>amount</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SummarySection;
