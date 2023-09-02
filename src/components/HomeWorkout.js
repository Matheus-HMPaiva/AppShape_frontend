import { Grid, Paper, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const defaultTheme = createTheme();

export default function HomeWorkout() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid item xs={12} sm={12} md={12} component={Paper} elevation={12} square sx={{ backgroundColor: '#e3ff00' }}>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}