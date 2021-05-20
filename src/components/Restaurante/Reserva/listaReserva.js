import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#1C1C1D",
        margin: "3rem",
        borderRadius: "2rem",
        padding: "1rem",
    },
    imagen: {
        display: "flex",
        textAlign:"left",
        margin: "1rem",
    },
    Logo: {
        margin: "1rem",
        width: "100%",
        minWidth: "8rem"
    },
    Gridtext: {
        display: "flex",
        alignItems: "center",
    },
    divText: {
        margin: "1rem",
    },
});

export default function RestaurantePerfil({ comida }) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className={classes.root}>
            <Grid container className={classes.Gridtext}>
                <Grid item xs={12} sm={4}>
                    <img src={comida} alt="Plato" className={classes.Logo} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.divText}>
                        <Typography variant="h5" className={classes.imagen}>Costilla ahumada</Typography>
                        <Typography variant="h7" className={classes.imagen}>250gr de costilla, papas a la francesa</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant="h6">$25.000</Typography>
                </Grid>
            </Grid>

        </div>
    );
}

