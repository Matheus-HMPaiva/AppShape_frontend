import { Box, Button, Grid, Paper, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import homeImage from '../images/yourLogo.png';
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

const containerStyle = {
    background: '#95d0b8',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#fff',
    padding: '20px',
};

const buttonStyle = {
    width: '100%',
    backgroundColor: '#FF5722', // Cor padrão
    color: '#fff',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease', // Adicione uma transição suave
    '&:hover': {
        backgroundColor: '#D84315', // Cor ao passar o mouse
    },
};

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
};
export default function Home({ setIsLoggedIn }) {

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        setIsLoggedIn(false);
    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <LogoutButton variant="outlined" onClick={handleLogout} color="error">
                    Sair
                </LogoutButton>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            sx={{
                                minHeight: '50vh',
                            }}
                        >
                            <Box
                                component='img'
                                src={homeImage}
                                alt="Your Logo"
                                sx={{
                                    objectFit: 'contain', // Use 'contain' or 'cover' as needed
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                }}
                            />
                        </Grid>
                    </Box>
                </Grid>
                <Grid container
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    alignItems="center"
                    justifyContent="center" style={containerStyle}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid alignItems="center" justifyContent="center" container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box textAlign="center">
                                    <Link to="/imc" style={linkStyle}>
                                        <Button variant="contained" sx={buttonStyle}>
                                            Calcular IMC
                                        </Button>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid mt={2} container spacing={1} paddingX={8}>
                            <Grid item xs={12}>
                                <Typography component="h5" variant="h5" fontFamily="sans-serif" sx={{ fontWeight: 'bold' }}>
                                    Qual será o treino de hoje?
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to="/workout/home" style={linkStyle}>
                                    <Typography component="h5" variant="h5" fontFamily="sans-serif" sx={{ fontWeight: 'bold' }}>
                                        Treino em casa
                                    </Typography>
                                    <Box component="img" src={treinoCasa} sx={{ width: '50%' }} alt="Treino em casa" />
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to="/workout/gym" style={linkStyle}>
                                    <Typography component="h5" variant="h5" fontFamily="sans-serif" sx={{ fontWeight: 'bold' }}>
                                        Treino na academia
                                    </Typography>
                                    <Box component="img" src={treinoAcademia} sx={{ width: '50%' }} alt="Treino na academia" />
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}