import styled from "@emotion/styled";
import { Box, Divider, Grid, MenuItem, Paper, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import tricepsCorda from '../images/tricepsCorda.png';
import roscaBarraW from '../images/roscaWBiceps.png';
import legPress45 from '../images/leg45.png';
import panturrila from '../images/panturrilhaPé.png';
import remadaSerrote from '../images/remadaSerrote.png';
import remadaCavalinho from '../images/remadaCavalinho.png';
import supinoReto from '../images/supinoReto.png';
import crucifixo from '../images/crucifixo.png';
import yourLogo from "../images/yourLogo.png";

const defaultTheme = createTheme();
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#95d0b8' : '#95d0b8',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}));


export default function GymWorkout() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid item xs={12} sm={12} md={12} square sx={{ backgroundColor: '#fff' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        }}
                    >
                        <MenuItem component={Link} to="/home" sx={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}>
                            <Box
                                component="img"
                                src={yourLogo}
                                alt="Your Logo"
                                sx={{
                                    maxHeight: "50%",
                                    maxWidth: "50%",
                                }}
                            />
                        </MenuItem>
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        marginBottom: 6,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Item>
                                    <Typography my={2} variant="h4" >Braço</Typography>
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/jsntw4tVAgQ" style={{ "textDecoration": "none !important", "color": "inherit" }} >
                                    <Box
                                        component='img'
                                        src={tricepsCorda}
                                        sx={{
                                            width: '50%',
                                            height: "auto",
                                        }} />
                                    <Typography component="h2">
                                        Triceps corda
                                    </Typography>
                                    </a>
                                    <Divider sx={{ my: 4 }} />
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/JTA0ikBvJrY" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                    <Box
                                        component='img'
                                        src={roscaBarraW}
                                        sx={{
                                            width: '50%',
                                            height: "auto",
                                        }} />
                                    <Typography component="h2">
                                        Rosca W Bíceps
                                    </Typography>
                                    </a>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <Typography my={2} variant="h4" >Perna</Typography>
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/hUUGdvTNSo0" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                    <Box
                                        component='img'
                                        src={legPress45}
                                        sx={{
                                            width: '50%',
                                            height: "auto",
                                        }} />
                                    <Typography component="h2">
                                        Leg 45º
                                    </Typography>
                                    </a>
                                    <Divider sx={{ my: 4 }} />
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/5bNIy8N8Dxs" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                    <Box
                                        component='img'
                                        src={panturrila}
                                        sx={{
                                            width: '50%',
                                            height: "auto",
                                        }} />
                                    <Typography component="h2">
                                        Panturrilha em Pé
                                    </Typography>
                                    </a>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <Typography my={2} variant="h4" >Costas e posterior de ombro</Typography>
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/2s9GukbzI3s" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                    <Box
                                        component='img'
                                        src={remadaSerrote}
                                        sx={{
                                            width: '50%',
                                            height: "auto",
                                        }} />
                                    <Typography component="h2">
                                        Remada serrote
                                    </Typography>
                                    </a>
                                    <Divider sx={{ my: 4 }} />
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/ygRYqPsZr5U" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                    <Box
                                        component='img'
                                        src={remadaCavalinho}
                                        sx={{
                                            width: '50%',
                                            height: "auto",
                                        }} />
                                    <Typography component="h2">
                                        Remada cavalinho
                                    </Typography>
                                    </a>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <Typography my={2} variant="h4" >Peito e ombro</Typography>
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/Js-ziVg6lqA" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                    <Box
                                        component='img'
                                        src={supinoReto}
                                        sx={{
                                            width: '50%',
                                            height: "auto",
                                        }} />
                                    <Typography component="h2">
                                        Supino reto
                                    </Typography>
                                    </a>
                                    <Divider sx={{ my: 4 }} />
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/_N6tFhPtr2U" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                    <Box
                                        component='img'
                                        src={crucifixo}
                                        sx={{
                                            width: '50%',
                                            height: "auto",
                                        }} />
                                    <Typography component="h2">
                                        Crucifixo
                                    </Typography>
                                    </a>
                                </Item>
                            </Grid>

                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}