import styled from "@emotion/styled";
import { Box, Divider, Grid, MenuItem, Paper, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import tricepsBanco from '../images/tricepsBanco.png';
import roscaDireta from '../images/roscaDireta.png';
import agachamento from '../images/agachamento.png';
import agachamentoBulgaro from '../images/agachamentoBulgaro.png';
import puxadaComHalter from '../images/puxadaComHalter.png';
import superman from '../images/supermanPull.png';
import flexaoBraco from '../images/flexaoBraco.png';
import flexaoDeclinada from '../images/flexaoDeclinada.png';
import { Link } from "react-router-dom";

const defaultTheme = createTheme();
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function HomeWorkout() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square sx={{ backgroundColor: '#e3ff00' }}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 8,
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
                            <Typography component="h1" variant="h2" fontFamily={'sans-serif'} sx={{ fontWeight: 'bold' }}>
                                AppShape
                            </Typography>
                            <Typography fontFamily={'sans-serif'} sx={{ fontWeight: 'bold' }}>
                                Treino em Casa
                            </Typography>
                        </MenuItem>
                    </Box>
                    <Box sx={{
                        flexGrow: 1, my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Item>
                                    <Typography my={2} variant="h4" >Braço</Typography>
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/p_DeBmkbCUc" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                        <Box
                                            component='img'
                                            src={tricepsBanco}
                                            sx={{
                                                width: '50%',
                                            }} />
                                        <Typography component="h2">
                                            Triceps banco
                                        </Typography></a>
                                    <Divider sx={{ my: 4 }} />
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/0T7V5o9ypUw" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                        <Box
                                            component='img'
                                            src={roscaDireta}
                                            sx={{
                                                width: '50%',
                                            }} />
                                        <Typography component="h2">
                                            Rosca direta
                                        </Typography>
                                    </a>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <Typography my={2} variant="h4" >Perna</Typography>
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/AmpX2jRn9fs" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                        <Box
                                            component='img'
                                            src={agachamento}
                                            sx={{
                                                width: '50%',
                                            }} />
                                        <Typography component="h2">
                                            Agachamento
                                        </Typography>
                                    </a>
                                    <Divider sx={{ my: 4 }} />
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/XyAlBa5Io1Y" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                        <Box
                                            component='img'
                                            src={agachamentoBulgaro}
                                            sx={{
                                                width: '50%',
                                            }} />
                                        <Typography component="h2">
                                            Agachamento búlgaro
                                        </Typography>
                                    </a>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <Typography my={2} variant="h4" >Costas e posterior de ombro</Typography>
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/jbar9KxxfWs" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                        <Box
                                            component='img'
                                            src={puxadaComHalter}
                                            sx={{
                                                width: '50%',
                                            }} />
                                        <Typography component="h2">
                                            Puxada com Halter
                                        </Typography>
                                    </a>
                                    <Divider sx={{ my: 4 }} />
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=gAV_qIi53eo" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                        <Box
                                            component='img'
                                            src={superman}
                                            sx={{
                                                width: '50%',
                                            }} />
                                        <Typography component="h2">
                                            Superman Pull
                                        </Typography>
                                    </a>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <Typography my={2} variant="h4" >Peito e ombro</Typography>
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=m5q0mLp-ZjQ" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                        <Box
                                            component='img'
                                            src={flexaoBraco}
                                            sx={{
                                                width: '50%',
                                            }} />
                                        <Typography component="h2">
                                            Flexão de Braço
                                        </Typography>
                                    </a>
                                    <Divider sx={{ my: 4 }} />
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/shorts/_N6tFhPtr2U" style={{ "textDecoration": "none !important", "color": "inherit" }}>
                                        <Box
                                            component='img'
                                            src={flexaoDeclinada}
                                            sx={{
                                                width: '50%',
                                            }} />
                                        <Typography component="h2">
                                            Flexão Declinada
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