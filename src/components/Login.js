import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';

import bkImage from '../images/peso.png';
import yourLogo from '../images/yourLogo.png'; // Substitua com o caminho da sua imagem de logotipo

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Altere a cor primária conforme necessário
    },
  },
});

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const email = data.get('email');
    const password = data.get('password');

    try {
      const response = await fetch('https://lucky-raincoat-newt.cyclic.app/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          senha: password,
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        setIsLoggedIn(true);
        localStorage.setItem('token', responseData.token);
        localStorage.setItem('user_id', responseData.id);
        navigate('/home');
      } else {
        setError('Credenciais inválidas.');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao fazer login:', error);
      setError('Ocorreu um erro ao fazer login.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={yourLogo} alt="Logo" style={{ width: '40%' }} />
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
                inputProps={{ 'data-testid': 'email' }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                inputProps={{ 'data-testid': 'password' }}
                autoComplete="current-password"
              />
              <Link href="#" variant="body2" sx={{ mt: 2 }}>
                Esqueceu sua senha?
              </Link>
              <div>&nbsp;</div>
              <Link to={'/signup'} variant="body2" sx={{ mt: 2 }}>
                Não tem uma conta? Crie uma
              </Link>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Entrar
              </Button>
            </Box>
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          style={{
            backgroundImage: `url(${bkImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
