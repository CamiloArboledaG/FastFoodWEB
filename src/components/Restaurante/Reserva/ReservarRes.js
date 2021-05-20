import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo1 from './../../Recursos/LogoRestaurante/logo2.png';
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, IconButton, RadioGroup, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ListaReserva from './listaReserva';
import Comida from './../../Recursos/platos/plato7.png';
import Radio from '@material-ui/core/Radio';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
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
  divDetallesReserva: {
    backgroundColor: "#1F1D2B",
    padding: "2rem",
    borderRadius: "2rem",
  },
  text: {
    textAlign: "left",
    margin: "1rem",
  },
  para: {
    textAlign: "left",
    marginLeft: "1rem",
  },
  divreservafechahora: {
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    borderRadius: "3rem",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  label: {
    textTransform: 'capitalize',
  },
  buttoncancelar: {
    background: 'linear-gradient(180deg, #1F1D2B 50%, #1F1D2B 50%)',
    border: 0,
    color: '#EA7C69',
    height: 40,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    border: "3px solid #EA7C69",
    width: "50%",
    margin:"1rem",
  },
  buttonreserva: {
    background: 'linear-gradient(180deg, #EA7C69 50%, #EA7C69 50%)',
    border: 0,
    color: 'white',
    height: 40,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    border: "3px solid #EA7C69",
    width: "50%",
    margin:"1rem",
  },
}));

export default function ReservarRes({ }) {
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
            <Typography className={classes.separacion} variant="h3">Carnes de don juan</Typography>
          </Grid>
          <Grid item xs={12} sm={6} >
            <div className={classes.divDetallesReserva}>
              <Grid container className={classes.banner}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                  <Typography className={classes.text} variant="h5">Detalles de la reserva</Typography>
                  <Typography className={classes.text}>Tener en cuenta los siguientes puntos:</Typography>
                  <Typography className={classes.para}>1.  Gastar mínimo $50.000</Typography>
                  <Typography className={classes.para}>2.  Para cancelar o cambiar la reserva por favor hacerlo antes de 24 horas</Typography>
                  <Typography className={classes.para}>3. Si no se paga por adelantado, no demorar más 30 minutos en llegar  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>

                  <Typography variant="h6" className={classes.text}>Fecha y hora</Typography>
                  <div className={classes.divreservafechahora}>
                    <form className={classes.container} noValidate>
                      <TextField
                        id="datetime-local"
                        label="Next appointment"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>
                  </div>
                </Grid>
              </Grid>

              <div>

              </div>
            </div>
          </Grid>

        </Grid>
      </div>

      <div className={classes.menu}>
        <div >
          <Grid container className={classes.bannermenu}>
            <Grid item xs={12} sm={10}>
              <Typography className={classes.text} variant="h3">Selecciona tus platos favoritos y no esperes de más</Typography>
            </Grid>
          </Grid>
        </div>
        <div>
          <Typography variant="h5" style={{ display: "flex", margin: "3rem" }}>Entrantes</Typography>
          <Grid container className={classes.GridPlatos}>
            <Grid item xs={12} sm={12} md={6} lg={5} style={{ display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={1}>
                  <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} style={{ color: "#EA7C69" }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <ListaReserva comida={Comida} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} style={{ display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={1}>
                  <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} style={{ color: "#EA7C69" }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <ListaReserva comida={Comida} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Typography variant="h5" style={{ display: "flex", margin: "3rem" }}>Platos Fuertes</Typography>
          <Grid container className={classes.GridPlatos}>
            <Grid item xs={12} sm={12} md={6} lg={5} style={{ display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={1}>
                  <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} style={{ color: "#EA7C69" }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <ListaReserva comida={Comida} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} style={{ display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={1}>
                  <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} style={{ color: "#EA7C69" }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <ListaReserva comida={Comida} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} style={{ display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={1}>
                  <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} style={{ color: "#EA7C69" }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <ListaReserva comida={Comida} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} style={{ display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={1}>
                  <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} style={{ color: "#EA7C69" }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <ListaReserva comida={Comida} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Typography variant="h5" style={{ display: "flex", margin: "3rem" }}>Bebidas</Typography>
          <Grid container className={classes.GridPlatos}>
            <Grid item xs={12} sm={12} md={6} lg={5} style={{ display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={1}>
                  <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} style={{ color: "#EA7C69" }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <ListaReserva comida={Comida} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} style={{ display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={1}>
                  <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} style={{ color: "#EA7C69" }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <ListaReserva comida={Comida} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} style={{ display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={1}>
                  <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} style={{ color: "#EA7C69" }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <ListaReserva comida={Comida} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} style={{ display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={1}>
                  <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} style={{ color: "#EA7C69" }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <ListaReserva comida={Comida} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Typography variant="h5" style={{ display: "flex", margin: "3rem" }}>Postres</Typography>
          <Grid container className={classes.GridPlatos}>
            <Grid item xs={12} sm={12} md={6} lg={5} style={{ display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={1}>
                  <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} style={{ color: "#EA7C69" }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <ListaReserva comida={Comida} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} style={{ display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={1}>
                  <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} style={{ color: "#EA7C69" }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                  <ListaReserva comida={Comida} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <div className>
          <Grid container>
            <Grid xs={12} sm={6}>
              <Link to="restaurante">
            <Button variant="contained" classes={{
            root: classes.buttoncancelar,
            label: classes.label,
          }}>
            <strong>Cancelar reserva</strong>
          </Button>
              </Link>
            </Grid>
            <Grid xs={12} sm={6}>
              <Link to="recomendados">
            <Button variant="contained" classes={{
            root: classes.buttonreserva,
            label: classes.label,
          }}>
            <strong>Reservar</strong>
          </Button>
              </Link>
            </Grid>
          </Grid>
          
          
        </div>
      </div>



    </div>
  );
}


