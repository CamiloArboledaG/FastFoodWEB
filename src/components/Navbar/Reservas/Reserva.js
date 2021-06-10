import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        backgroundColor: "#1F1D2B",
        margin: "1rem",
        borderRadius: "1rem",
    },
    rootbutton: {
        background: 'linear-gradient(180deg, #1F1D2B 50%, #1F1D2B 50%)',
        border: 0,
        color: '#EA7C69',
        height: 40,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: "3px solid #EA7C69",
    },
    rootbutton2: {
        background: 'linear-gradient(180deg, #EA7C69 50%, #EA7C69 50%)',
        border: 0,
        color: 'white',
        height: 40,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: "3px solid #EA7C69",
    },
    button: {
        margin: "1em",
        marginLeft: "1em",
    },
    divinfo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "0.5em",
    },
});

export default function Reserva({ image }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.divinfo}>
                <Grid container className={classes.divinfo}>
                    <Grid item xs={12} sm={5}>
                        <div>
                            <img src={image} alt="Ofertas" className="OfertasLogo" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={7}>

                        <div>
                            <Typography>Carnes de don juan</Typography>
                            <Typography>27/05/2021  8:00 pm</Typography>
                        </div>
                    </Grid>


                </Grid>

            </div>

            <div className={classes.divinfo}>
            <Grid container className={classes.divinfo}>
            <Grid item xs={12} sm={6}>
                <Typography>Avenida 99 #99-99</Typography>

            </Grid>
            <Grid item xs={12} sm={5}>
                <Typography>Orden #34562</Typography>

            </Grid>

            </Grid>
            </div>

            <div>
                
            <div className={classes.divinfo}>
                <Grid container>


                        <Grid item xs={12} sm={6} >
                            <div className={classes.button} >
                                <Button variant="contained" classes={{
                                    root: classes.rootbutton2,
                                    label: classes.label,
                                }}>
                                    <strong>Cambiar</strong>
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.button}>
                                <Button variant="contained" classes={{
                                    root: classes.rootbutton,
                                    label: classes.label,
                                }}>
                                    <strong>Cancelar</strong>
                                </Button>
                            </div>
                        </Grid>
                    

                </Grid>
                </div>
            </div>
        </div>
    );
}
