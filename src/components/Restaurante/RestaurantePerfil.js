import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo1 from './../Recursos/LogoRestaurante/logo2.png';
import { IconButton, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';



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
    width: "100%",
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
});

export default function RestaurantePerfil({ image, nombre, calificacion }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        <div className={classes.divlogo}>
          <img src={logo1} alt="Ofertas" className={classes.Logo} />
        </div>
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
      </div>

    </div>
  );
}
