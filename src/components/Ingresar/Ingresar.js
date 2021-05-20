import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Button, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import "./Ingresar.css"
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    label: {
        textTransform: 'capitalize',
    },
    rootbutton2: {
        background: 'linear-gradient(180deg, #EA7C69 50%, #EA7C69 50%)',
        border: 0,
        color: 'white',
        height: 40,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: "3px solid #EA7C69",
        width: "85%",
        borderRadius: "3rem",
    },
    button: {
        margin: "1rem",
        marginLeft: theme.spacing(2),
        marginBottom: "3rem",
        marginTop:"4rem",
    },
    checkform: {
        display: "flex",
        marginLeft: "3rem",
    },
}));

export default function Registro() {

    const classes = useStyles();

    return (
        <div className="registro">
            <div className="divatras">
                <Link to="/">
                <IconButton >
                    <KeyboardBackspaceIcon fontSize="large" className="atras" />
                </IconButton>
                </Link>
            </div>

            <Grid container className="registroform">
                <Grid item xs={12} sm={8} md={6} className="gridtexto">
                    <Typography className="Registrotexto" variant="h3">Te estábamos esperando, es momento de reservar</Typography>
                </Grid>

                <Grid item xs={12} sm={8} md={5} lg={5}>
                    <div className="formdiv">
                        <div className="titulosform">
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={6}>
                                    <Link to="ingresar">
                                    <IconButton>
                                        <Typography component="h3" variant="h5" className="RegistroIngreso1">
                                            Ingresar
                         </Typography>
                                    </IconButton>
                                    </Link>
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Link to="registro">
                                    <IconButton>
                                        <Typography component="h3" variant="h5" className="RegistroIngreso2">
                                        Registro
                         </Typography>
                                    </IconButton>
                                    </Link>
                                </Grid>
                            </Grid>



                        </div>
                        <form className="form" noValidate>
                            <Grid container spacing={5}>
                                <Grid item xs={12} >
                                    <input className="TextField" type="email" placeholder="Correo"></input>
                                </Grid>
                                <Grid item xs={12}>
                                    <input className="TextField" type="password" placeholder="Contraseña"></input>
                                </Grid>
                            </Grid>
                            <div className={classes.button} >
                                <Link to="recomendados">
                                <Button variant="contained" classes={{
                                    root: classes.rootbutton2,
                                    label: classes.label,
                                }}>
                                    <strong>Ingresar</strong>
                                </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </Grid>

            </Grid>



        </div>
    )
}
