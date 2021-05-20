import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo1 from './../Recursos/LogoRestaurante/logo2.png';
import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Lista from './Lista/lista';
import comida from './../Recursos/platos/plato7.png'

const useStyles = makeStyles({
  root: {
    marginTop: "15rem",
    color: "white",
  },
  banner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  Logo: {
    width: '70%',
    margin: "5px",
    padding: "2rem",
    backgroundColor: "#1C1C1D",
    borderRadius: "2rem",
  },
  butonreserva: {
    width: '100%',
    borderRadius: "1rem",
  },
  textbutonreserva: {
    color: "white",
  },
  divreservabuton: {
    backgroundColor: "#EA7C69",
    borderRadius: "3rem",
    margin: "1rem",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  divcalificacion: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem"
  },
  separacion: {
    marginBottom: "1rem"
  },
  menu: {
    backgroundColor: "#1F1D2B",
    marginTop: "10rem",
    color: "white",
    paddingTop: "3rem",
    paddingBottom: "3rem",
  },
  bannermenu: {
    display: "flex",
    justifyContent: "space-around",
  },
  label: {
    color: "white",
    textTransform: 'capitalize',
  },
  rootbutton2: {
    background: 'linear-gradient(180deg, #1F1D2B 50%, #1F1D2B 50%)',
    border: 0,
    color: '#EA7C69',
    height: 40,
    padding: '0px 30px',
    border: "2px solid gray",
    flexWrap: "wrap",
    borderRadius: "0rem",
    "&:hover": {
      backgroundColor: 'rgb(7, 177, 77, 0.42)',
    },
  },
  GridPlatos: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function RestaurantePerfil({  }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <div>
        <Grid container className={classes.banner}>
          <Grid item xs={8} sm={2} >

            <div className={classes.divlogo}>
              <img src={logo1} alt="Ofertas" className={classes.Logo} />
            </div>
          </Grid>
          <Grid item xs={12} sm={4} >
            <div>
              <Typography className={classes.separacion} variant="h3">Carnes de don juan</Typography>
              <div className={classes.divcalificacion}>
                <Typography variant="h5">Excelente servicio</Typography>
                <StarIcon style={{ color: "white", }}></StarIcon>
                <StarIcon style={{ color: "white" }}></StarIcon>
                <StarIcon style={{ color: "white" }}></StarIcon>
                <StarIcon style={{ color: "white" }}></StarIcon>
                <StarIcon style={{ color: "white" }}></StarIcon>
              </div>
              <Typography className={classes.separacion}>Avenida 5 #99-99</Typography>

              <div className={classes.divreservabuton}>
                <IconButton className={classes.butonreserva}>
                  <Typography className={classes.textbutonreserva}>Reservar</Typography>
                </IconButton>
              </div>
            </div>

          </Grid>

        </Grid>
      </div>

      <div className={classes.menu}>
        <div >
          <Grid container className={classes.bannermenu}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4">Carta</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" classes={{
                root: classes.rootbutton2,
                label: classes.label,
              }}>
                <strong>Entrantes</strong>
              </Button>
              <Button variant="contained" classes={{
                root: classes.rootbutton2,
                label: classes.label,
              }}>
                <strong>Platos fuertes</strong>
              </Button>
              <Button variant="contained" classes={{
                root: classes.rootbutton2,
                label: classes.label,
              }}>
                <strong>Bebidas</strong>
              </Button>
              <Button variant="contained" classes={{
                root: classes.rootbutton2,
                label: classes.label,
              }}>
                <strong>Postres</strong>
              </Button>
            </Grid>
          </Grid>
        </div>
          
        <Grid container className={classes.GridPlatos}>
            <Grid item xs={12} sm={5}>
            <Lista comida={comida}/>
            </Grid>
            <Grid item xs={12} sm={5}>
            <Lista comida={comida}/>
            </Grid>
            <Grid item xs={12} sm={5}>
            <Lista comida={comida}/>
            </Grid>
            <Grid item xs={12} sm={5}>
            <Lista comida={comida}/>
            </Grid>
          </Grid>


      </div>

    </div>
  );
}
