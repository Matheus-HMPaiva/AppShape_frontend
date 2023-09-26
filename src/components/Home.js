import { Box, Button, Grid, Paper, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import homeImage from '../images/home.png';
import treinoCasa from '../images/treinoCasa.png';
import treinoAcademia from '../images/treinoAcademia.png';
import { Link } from "react-router-dom";

const defaultTheme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const LogoutButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default function Home({ setIsLoggedIn }) {

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        setIsLoggedIn(false);
    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <LogoutButton variant="outlined" onClick={handleLogout}>
                    Sair
                </LogoutButton>
                <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: '#e3ff00' }}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h2" fontFamily={'sans-serif'} sx={{ fontWeight: 'bold' }}>
                            AppShape
                        </Typography>
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                minHeight: '50vh',
                            }}>
                            <Box
                                component='img'
                                src={homeImage}
                                sx={{
                                    width: '50%',
                                }} />
                        </Grid>
                    </Box>
                </Grid>
                <Grid
                    container
                    item
                    xs={false}
                    sm={6}
                    md={7}
                    alignItems="center"
                    justifyContent="center"
                    style={{
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#e3ff00',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            alignItems="center"
                            justifyContent="center"
                            container
                            spacing={2}
                        >
                            <Grid item xs={6}>
                                <Item>
                                    <Link to={'/imc'}>
                                        <Button sx={{ width: '100%' }} variant="contained">
                                            Calcular IMC
                                        </Button >
                                    </Link>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid
                            mt={2}
                            alignItems="center"
                            justifyContent="center"
                            container
                            spacing={1}
                            paddingX={8}
                        >
                            <Grid item xs={12}>
                                <Item>
                                    <Typography component="h5" variant="h5" fontFamily={'sans-serif'} sx={{ fontWeight: 'bold' }}>
                                        Selecione o tipo de treino
                                    </Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Link style={{ textDecoration: 'none' }} to={'/workout/home'}>
                                        <Typography component="h5" variant="h5" fontFamily={'sans-serif'} sx={{ fontWeight: 'bold' }}>
                                            Treino em casa
                                        </Typography>
                                        <Box
                                            component='img'
                                            src={treinoCasa}
                                            sx={{
                                                width: '50%',
                                            }} />
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Link style={{ textDecoration: 'none' }} to={'/workout/gym'}>
                                        <Typography component="h5" variant="h5" fontFamily={'sans-serif'} sx={{ fontWeight: 'bold' }}>
                                            Treino na academia
                                        </Typography>
                                        <Box
                                            component='img'
                                            src={treinoAcademia}
                                            sx={{
                                                width: '50%',
                                            }} />
                                    </Link>
                                </Item>
                            </Grid>

                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}