import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#1C1C1D",
    color: "white",
    display: "flex",
    padding: "1rem",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: "1rem",
    boxShadow: "0px 5px rgba(0, 0, 0, 0.2)"
  },
  Logo: {
    minWidth: "8rem",
    minHeight: "8rem",
    maxWidth: "8rem",
    maxHeight: "8rem",
    margin: "5px",
  },
  divcalificacion: {
    display: "flex",
  },
  divinfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin:"2px"
  },
});

export default function Restaurante({ image, nombre, calificacion }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <IconButton>
      <Card className={classes.root}>
        <div>
          <img src={image} alt="Ofertas" className={classes.Logo} />
        </div>
        <div className={classes.divinfo}>
          <Typography variant="h6" >{nombre}</Typography>
          <div className={classes.divcalificacion}>
            <Typography>{calificacion}</Typography>
            <StarIcon style={{ color: "orange" }}></StarIcon>
          </div>
        </div>
      </Card>

    </IconButton>
  );
}
