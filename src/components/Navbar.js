import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from './Recursos/logo.png';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "7rem",
        display: "1",
    },
    logodiv: {
        margin: "0.7rem",
        marginRight: "2rem",
        paddingLeft: "0.7rem",
        backgroundColor: "#EA7C69",
        borderRadius: "10px",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
    rootbutton: {
        background: 'linear-gradient(180deg, #1F1D2B 50%, #1F1D2B 50%)',
        border: 0,
        color: '#EA7C69',
        height: 40,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: "3px solid #EA7C69",
    },
    rootbutton2: {
        background: 'linear-gradient(180deg, #EA7C69 50%, #EA7C69 50%)',
        border: 0,
        color: 'white',
        height: 40,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: "3px solid #EA7C69",
    },
    appBar: {
        backgroundColor: "#1F1D2B",
        boxShadow: "none",
    },
    Color: {
        color: "#E0E6E9",
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        margin: "1rem",
        marginLeft: theme.spacing(2),
    },
    image: {
        height: "1.6rem",
    },
    menuButton: {
    },
    search: {
        margin: "1rem",
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(2em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

/**appbar fixed o static */
const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar} >
                <Toolbar >

                    <Grid container spacing={2}>
                        <Grid item xs={0.5} sm={0.5} >
                            <div className={classes.logodiv}>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                    <img src={logo} className={classes.image} />
                                </IconButton>
                            </div>


                        </Grid>
                        <Grid item xs={7} sm={3} md={3} lg={3}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Buscar..."
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                            
                        </Grid>
                        <div className={classes.grow} />
                        <Grid item  sm={1.2} md={1.1} >
                            <div className={classes.button}>
                                <Button variant="contained"  classes={{
                                    root: classes.rootbutton,
                                    label: classes.label,
                                }}>
                                    <strong>Ingresar</strong>
                                </Button>
                            </div>
                        </Grid>
                        <Grid item  sm={1.2} >
                            <div className={classes.button} >
                                <Button variant="contained" classes={{
                                    root: classes.rootbutton2,
                                    label: classes.label,
                                }}>
                                    <strong>Registro</strong>
                                </Button>
                            </div>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar

