import { Typography } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import "./Recomendados.css";
import Restaurantes from './Restaurantes/Restaurantes'
import logo1 from './../Recursos/LogoRestaurante/logo1.png';
import logo2 from './../Recursos/LogoRestaurante/logo2.png';
import logo3 from './../Recursos/LogoRestaurante/logo3.png';
import logo4 from './../Recursos/LogoRestaurante/logo4.png';
import logo5 from './../Recursos/LogoRestaurante/logo5.png';
import logo6 from './../Recursos/LogoRestaurante/logo6.png';
import { Link } from 'react-router-dom';

export default function Recomendados() {

    return (
        <div className="recomendados">
            <div className="root">
                <Grid container>
                    <Grid item sm={12} >
                        <Typography className="titulo" variant="h3">Más visitados</Typography>
                    </Grid>
                    <Grid item sm={12} >
                        <Typography className="textosub" variant="h7">Encuentra los restaurantes más visitados por nuestros usuarios.</Typography>
                    </Grid>
                </Grid>
                <Grid container className="containerplatos" >

                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <Restaurantes image={logo1} nombre={"Pizza doña maria"} calificacion={"Excelente servicio "}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <Link to="restaurante">
                        <Restaurantes image={logo2} nombre={"Carnes de don juan"} calificacion={"Excelente servicio "}/>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <Restaurantes image={logo3} nombre={"Pastas la ricura"} calificacion={"Excelente servicio "}/>
                    </Grid>

                </Grid>

            </div>
            <div className="root">
                <Grid container>
                    <Grid item sm={12} >
                        <Typography className="titulo" variant="h3">Mejor calificados</Typography>
                    </Grid>
                    <Grid item sm={12} >
                        <Typography className="textosub" variant="h7">Visita los restaurantes amados por nuestra comunidad.</Typography>
                    </Grid>
                </Grid>
                <Grid container className="containerplatos" >

                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <Restaurantes image={logo4} nombre={"Marítimo"} calificacion={"Excelente servicio "}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <Restaurantes image={logo5} nombre={"Asadero broaster"} calificacion={"Buen servicio "}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <Restaurantes image={logo6} nombre={"Mi tierrita"} calificacion={"Buen servicio "}/>
                    </Grid>
                </Grid>

            </div>
        </div>

    )
}


