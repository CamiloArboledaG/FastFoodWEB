import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Button, Checkbox, FormControlLabel, Grid, IconButton, makeStyles, TextField, Typography } from '@material-ui/core';
import "./Registro.css"
import { deepOrange } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const OrangeCheckbox = withStyles({
    root: {
        color: deepOrange[200],
        '&$checked': {
            color: deepOrange[300],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

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
    },
    checkform: {
        display: "flex",
        marginLeft: "3rem",
    },
}));

export default function Registro() {

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [state, setState] = React.useState({
        checked: true,
    });

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
                    <Typography className="Registrotexto" variant="h3">Haz parte de nuestra gran familia</Typography>
                </Grid>

                <Grid item xs={12} sm={8} md={5} lg={5}>
                    <div className="formdiv">
                        <div className="titulosform">
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={6}>
                                    <Link to="registro">
                                    <IconButton>
                                        <Typography component="h3" variant="h5" className="RegistroIngreso1">
                                            Registro
                         </Typography>
                                    </IconButton>
                                    </Link>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Link to="ingresar" style={{ color: '#FFF' }}>
                                    <IconButton>
                                        <Typography component="h3" variant="h5" className="RegistroIngreso2">
                                            Ingresar
                         </Typography>
                                    </IconButton>
                                    </Link>
                                </Grid>
                            </Grid>



                        </div>
                        <form className="form" noValidate>
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={12}>
                                    <input className="TextField" type="text" name="name" placeholder="Nombre"></input>
                                </Grid>
                                <Grid item xs={12} >
                                    <input className="TextField" type="email" placeholder="Correo"></input>
                                </Grid>
                                <Grid item xs={12}>
                                    <input className="TextField" type="password" placeholder="Contraseña"></input>
                                </Grid>
                                <Grid item xs={12}>
                                    <input className="TextField" placeholder="Celular"></input>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel className={classes.checkform}
                                        control={<OrangeCheckbox checked={state.checked} name="checked" onChange={handleChange} />}
                                        label="Acepta los términos y condiciones"
                                    />
                                </Grid>
                            </Grid>
                            <div className={classes.button} >
                            <Link to="registro-2" style={{ color: '#FFF' }}>
                            <Button variant="contained" classes={{
                                    root: classes.rootbutton2,
                                    label: classes.label,
                                }}>
                                    <strong>Registrarse</strong>
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
