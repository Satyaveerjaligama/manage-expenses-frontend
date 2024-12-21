import { Box, Grid } from "@mui/material";

const SummarySection = () => {
  return (
    <Box className="mt-3">
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        className="items-center text-center text-white"
      >
        <Grid item xs={12} sm={6} md={4}>
          <p className="text-lg font-bold">Today</p>
          <p>&#8377; 1000</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p className="text-lg font-bold">This Week</p>
          <p>&#8377; 1000</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p className="text-lg font-bold">This Month</p>
          <p>&#8377; 1000</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SummarySection;
