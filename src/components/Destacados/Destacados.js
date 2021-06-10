import { Typography } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import "./Destacados.css";
import plato1 from './../Recursos/platos/plato.png';
import plato2 from './../Recursos/platos/plato2.png';
import plato3 from './../Recursos/platos/plato3.png';
import plato4 from './../Recursos/platos/plato4.png';
import plato5 from './../Recursos/platos/plato5.png';

export default function Destacados() {

    return (
        <div className="root">
            <Grid container>
                <Grid item sm={12} >
                    <Typography className="titulo" variant="h3">Restaurantes Destacados</Typography>
                </Grid>
                <Grid item sm={12} >
                    <Typography className="textosub" variant="h7">Reserva tus platos favoritos y no gastes el tiempo esperando.</Typography>
                </Grid>
            </Grid>
            <Grid container className="containerplatos" >

                <Grid item xs={12} sm={12} md={4} lg={2}>
                    <img src={plato1} alt="Imagen1" className="Imagen1" />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={2}>
                    <img src={plato2} alt="Imagen1" className="Imagen2" />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={2}>
                    <img src={plato3} alt="Imagen1" className="Imagen3" />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={2}>
                    <img src={plato4} alt="Imagen1" className="Imagen2" />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={2}>
                    <img src={plato5} alt="Imagen1" className="Imagen1" />
                </Grid>

            </Grid>

        </div>
    )
}


