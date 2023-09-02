import styled from "@emotion/styled";
import { Button, Grid, Paper, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";

const defaultTheme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function IMCCalculator() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid container item alignItems="center" justifyContent="center" xs={12} sm={12} md={12} component={Paper} elevation={12} square sx={{ backgroundColor: '#e3ff00' }}>
                    <Grid item xs={6}>
                        <Item>
                            <Typography component="h5" variant="h5" fontFamily={'sans-serif'} sx={{ fontWeight: 'bold' }}>
                                Cálculo de Índice de Massa Corporal
                            </Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="height"
                                label="Altura (em centímetros)"
                                name="height"
                                autoComplete="height"
                                autoFocus
                                inputProps={{ "data-testid": "height" }}
                                sx={{ backgroundColor: '#F5F5F5' }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="weight"
                                label="Peso (em quilogramas)"
                                name="weight"
                                autoComplete="weight"
                                autoFocus
                                inputProps={{ "data-testid": "weight" }}
                                sx={{ backgroundColor: '#F5F5F5' }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="age"
                                label="Idade"
                                name="age"
                                autoComplete="age"
                                autoFocus
                                inputProps={{ "data-testid": "age" }}
                                sx={{ backgroundColor: '#F5F5F5' }}
                            />
                            <Grid sx={12} my={4} >
                                <Button sx={{ width: '30%', display: 'flex' }} variant="contained">Calcular</Button>
                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}