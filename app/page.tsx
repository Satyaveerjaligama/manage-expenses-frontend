"use client";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { routes } from "@/utils/routes";
import Image from "next/image";
import moneyEmoji from "@/assets/images/moneyEmoji.jpg";
import brandLogo from "@/assets/images/brandLogo.jpg";
import { lexend } from "@/utils/fonts";
import { PRODUCT_NAME } from "@/utils/constants";

export default function Home() {
  const router = useRouter();
  return (
    <Box className="p-5">
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        className="items-center text-white"
      >
        <Grid item xs={12} md={1.5}>
          <Image
            src={brandLogo}
            alt="brand logo"
            width={100}
            height={100}
            style={{ borderRadius: "50px" }}
          />
        </Grid>
        <Grid item xs={12} md={1.8}>
          <p
            className={`cursor-pointer hover:underline !text-base`}
            onClick={() => router.push(`${routes.login}`)}
          >
            Personal Expenses
          </p>
        </Grid>
        <Grid item xs={12} md={1.8}>
          <p
            className={`cursor-pointer hover:underline !text-base`}
            onClick={() => router.push(`${routes.login}`)}
          >
            Group Expenses
          </p>
        </Grid>
      </Grid>
      <Box className="flex mt-5 mb-9" sx={{ borderRadius: "50px" }}>
        <Image
          src={moneyEmoji}
          alt="Hero Image"
          width={500}
          height={500}
          style={{ borderRadius: "50px" }}
        />
        <p
          className={`w-full text-center content-center !text-6xl text-white ${lexend.className}`}
        >
          {PRODUCT_NAME}
        </p>
      </Box>
    </Box>
  );
}
