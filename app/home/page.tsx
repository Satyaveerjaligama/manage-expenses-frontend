"use client";
import Header from "@/components/Header";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Image from "next/image";
import personalExpenseImage from "@/assets/images/personalExpense.jpg";
import groupExpenseImage from "@/assets/images/groupExpense.jpg";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { crimsonPro } from "@/utils/fonts";
import { useRouter } from "next/navigation";
import { routes } from "@/utils/routes";

const HomePage = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <div
        className="w-4/5 absolute top-2/4 left-2/4 flex flex-row justify-around"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <Card>
          <CardActionArea
            onClick={() => router.push(`/${routes.personalExpenses}`)}
          >
            <CardMedia>
              <Image
                src={personalExpenseImage}
                width="200"
                height="200"
                alt="personal expense image"
              />
            </CardMedia>
            <CardContent className={`${crimsonPro.className} text-lg`}>
              Personal Expense {"  "}
              <EastRoundedIcon />
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea
            onClick={() => router.push(`/${routes.groupExpenses}`)}
          >
            <CardMedia>
              <Image
                src={groupExpenseImage}
                width="200"
                height="200"
                alt="group expense image"
              />
            </CardMedia>
            <CardContent className={`${crimsonPro.className} text-lg`}>
              Group Expense {"  "}
              <EastRoundedIcon />
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default HomePage;
