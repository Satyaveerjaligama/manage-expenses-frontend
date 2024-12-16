'use client';
import { PRODUCT_NAME } from "@/utils/constants";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";

const LoginPage = () => {
    return (
        <Card className="w-2/5 absolute top-2/4 left-2/4" sx={{transform: "translate(-50%, -50%)"}}>
            <CardContent>
                <Typography className="text-center !mb-2 !text-lg !font-semibold">{PRODUCT_NAME}</Typography>
                <Grid container rowSpacing={2} columnSpacing={2}>
                    <Grid item xs={12}>
                    <TextField label="Email/Phone number" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField label="Password" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                    <Button variant="contained" className="!mt-7" fullWidth>Login</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default LoginPage;