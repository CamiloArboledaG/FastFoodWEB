import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

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
        display: "flex",
        justifyContent: "center",
    },
    divinfo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "0.5em",
    },
    backdrop: {
        color: '#fff',
    },
});

export default function ReservaFinalizada({ image }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };


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
                        <Grid item xs={12} sm={12}>
                            <div className={classes.button} >
                                <Button variant="contained" onClick={handleToggle} classes={{
                                    root: classes.rootbutton2,
                                    label: classes.label,
                                }}>
                                    <strong>Calificar</strong>
                                </Button>

                            </div>
                        </Grid>
                    </Grid>
                </div>
                                    
                <Backdrop className={classes.backdrop} open={open} >
                    <div className={classes.root} >
                        <div className={classes.divinfo}>
                            <Grid container className={classes.divinfo}>
                                <Grid item xs={12} sm={5}>
                                    <div>
                                        <img src={image} alt="Ofertas" className="OfertasLogo" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={7}>

                                    <div>
                                        <Typography variant="h6">Carnes de don juan</Typography>
                                        <Typography variant="h7">¿Te gusto el restaurante?</Typography>
                                        <Box component="fieldset" borderColor="transparent">
                                            <Rating
                                            />
                                        </Box>
                                    </div>
                                </Grid>


                            </Grid>

                        </div>
                        <div>

                            <div className={classes.divinfo}>
                                <Grid container>
                                    <Grid item xs={12} sm={12}>
                                        <div className={classes.button} >
                                            <Button variant="contained" onClick={handleClose} classes={{
                                                root: classes.rootbutton2,
                                                label: classes.label,
                                            }}>
                                                <strong>Enviar</strong>
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </Backdrop>
            </div>
        </div>
    );
}
