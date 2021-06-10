import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#1C1C1D",
        margin: "3rem",
        borderRadius: "2rem"

    },
    imagen: {
        display: "flex",
        margin: "3rem",
        marginBottom: "3rem"
    },
    Logo: {
        margin: "1rem",
        width:"70%",
        minWidth: "10rem"
    },
    Gridtext: {
        paddingBottom: "2rem",
    },
});

export default function RestaurantePerfil({ comida }) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className={classes.root}>
            <img src={comida} alt="Plato" className={classes.Logo} />
            <Typography variant="h5" className={classes.imagen}>Costilla ahumada</Typography>
            <Grid container className={classes.Gridtext}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">$25.000</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">250gr de costilla, papas a la francesa</Typography>
                </Grid>
            </Grid>

        </div>
    );
}
