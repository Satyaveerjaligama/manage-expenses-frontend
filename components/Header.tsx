"use client";
import { Box, Grid } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Image from "next/image";
import brandLogo from "@/assets/images/brandLogo.jpg";

const Header = () => {
  return (
    <Box className="p-5">
      <Grid container rowSpacing={2} columnSpacing={2} className="items-center">
        <Grid item xs={12} md={6}>
          <Image src={brandLogo} alt="brand logo" width={100} height={100} />
        </Grid>
        <Grid item xs={12} md={6} className="text-right">
          <AccountCircleRoundedIcon className="cursor-pointer !text-5xl text-white" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
