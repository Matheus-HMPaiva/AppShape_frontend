import styled from "@emotion/styled";
import { Box, Button, Grid, MenuItem, Paper, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const defaultTheme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function IMCCalculator() {
    const [height, setHeight] = useState(null);
    const [age, setAge] = useState(null);
    const [weight, setWeight] = useState(null);
    const [imc, setImc] = useState(null);
    const [message, setMessage] = useState(null);
    useEffect(() => {
        
        fetchUserData();
    }, []);
    // Função para buscar os dados do usuário ao carregar a página
    const fetchUserData = async() => {
      try {
        const userId = localStorage.getItem('user_id');
        const response = await fetch(
          `http://localhost:3000/imc?user_id=${userId}`
        );
        if (response.ok) {
          const data = await response.json();
          setHeight(data.imc.height);
          setAge(data.imc.age);
          setWeight(data.imc.weight);
        } else {
          console.error("Erro ao buscar os dados do usuário na API.");
        }
      } catch (error) {
        console.error("Ocorreu um erro ao fazer a solicitação:", error);
      }
    }
    
    const calculate = async() => {
        const tmpHeight = height / 100;
        const tmpImc = Number((weight / (tmpHeight ^ 2)).toFixed(2));
        if (tmpImc < 18.5) {
            setImc(tmpImc);
            setMessage('Abaixo do peso');
        }
        else if (tmpImc >= 18.5 && tmpImc <= 24.99) {
            setImc(tmpImc);
            setMessage("Peso Ideal");
        }
        else if (tmpImc > 24.99 && tmpImc < 30) {
            setImc(tmpImc);
            setMessage("Sobrepeso");
        }
        else if (imc >= 30 && tmpImc < 35) {
            setImc(tmpImc);
            setMessage("Obesidade Moderada");
        }
        else if (tmpImc >= 35 && tmpImc < 40) {
            setImc(tmpImc);
            setMessage("Obesidade Severa");
        }
        else if (tmpImc >= 40) {
            setImc(tmpImc);
            setMessage("Obesidade Mórbida");
        } 
        try {
            const userId = localStorage.getItem('user_id');
            const response = await fetch('http://localhost:3000/imc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: userId, // Substitua pelo ID do usuário correto
                    height: height,
                    age: age,
                    weight: weight,
                    imc: tmpImc,
                }),
            });

            if (response.ok) {
                console.log('Dados enviados com sucesso para o servidor.');
            } else {
                console.error('Erro ao enviar os dados para o servidor.');
            }
        } catch (error) {
            console.error('Ocorreu um erro ao fazer a solicitação:', error);
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid item xs={12} sm={6} md={5} sx={{
                    position: 'absolute',
                    width: '50%',
                }}>
                    <MenuItem component={Link} to="/home" sx={{
                        my: 8,
                        mx: 4,
                        flexDirection: 'column',
                        alignItems: 'center',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}>
                        <Box
                        >
                            <Typography component="h1" variant="h2" fontFamily={'sans-serif'} sx={{ fontWeight: 'bold' }}>
                                AppShape
                            </Typography>
                        </Box>
                    </MenuItem>
                </Grid>
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
                                InputLabelProps={{ shrink: height ? true : false }}
                                value={height ? height : null}
                                inputProps={{ "data-testid": "height" }}
                                sx={{ backgroundColor: '#F5F5F5' }}
                                onChange={(e) => setHeight(() => e.target.value)}
                                type="number"
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
                                InputLabelProps={{ shrink: weight ? true : false }}
                                value={weight ? weight : null}
                                inputProps={{ "data-testid": "weight" }}
                                sx={{ backgroundColor: '#F5F5F5' }}
                                onChange={(e) => setWeight(() => e.target.value)}
                                type="number"
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
                                InputLabelProps={{ shrink: age ? true : false }}
                                value={age ? age : null}
                                inputProps={{ "data-testid": "age" }}
                                sx={{ backgroundColor: '#F5F5F5' }}
                                onChange={(e) => setAge(() => e.target.value)}
                                type="number"
                            />
                            <Grid mb={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Grid>
                                    <Button variant="contained" onClick={calculate}>Calcular</Button>
                                </Grid>
                                {imc &&
                                    <Grid>
                                        <Typography sx={{ fontSize: 64, color: '#a8bd00', fontWeight: '700', display: 'flex' }}>{imc}</Typography>
                                        <Typography
                                            sx={{ fontWeight: 'bold', fontSize: '130%' }}>{message}</Typography>
                                    </Grid>
                                }
                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}