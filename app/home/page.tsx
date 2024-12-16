"use client";

import { Card, CardActionArea, Typography } from "@mui/material";

const HomePage = () => {
    return (
        <div className="w-4/5 absolute top-2/4 left-2/4 flex flex-row justify-around" style={{transform: "translate(-50%, -50%)"}}>
            <Card>
                <CardActionArea>
                    <Typography className="p-5">Personal Expenses</Typography>
                </CardActionArea>
            </Card>
            <Card>
                <CardActionArea>
                    <Typography className="p-5">Group Expenses</Typography>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default HomePage;