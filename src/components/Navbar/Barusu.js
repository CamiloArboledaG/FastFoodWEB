import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from './../Recursos/logo.png';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import EventIcon from '@material-ui/icons/Event';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import { Badge, Typography } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Reserva from './Reservas/Reserva';
import LogoRes from './../Recursos/LogoRestaurante/logoRes.png';
import ReservaFinalizada from './Reservas/ReservaFinalizada';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "7rem",
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
        color: "#EA7C69",
        fontSize: "1.8rem"
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
        margin: "0.5rem",
        marginRight: "2rem"
    },
    image: {
        height: "1.6rem",
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
    Menu: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        "& .MuiPaper-root": {
            backgroundColor: "#252836",
            color: "white",
            borderRadius: "1rem",
        }
    },
    MenuPerfil: {
        padding: "2rem",
        paddingRight: "13rem",
    },
    menudiv: {
        backgroundColor: "black",

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
    divinfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    divPerfil: {
        backgroundColor: "#1F1D2B",
        margin: "1rem",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: "1rem",
    },
    imagenUsu: {
        fontSize: "4rem",
    },
    profilemenuButon: {
        color: "white",
    },
    profilemenuButondiv: {
        backgroundColor: "#EA7C69",
        borderRadius: "3rem",
        margin: "1rem",
        marginLeft: "1rem",
        marginRight: "1rem",
    },
    profilemenuButonIcon: {
        width: '100%',
        borderRadius: "1rem",
    },
    reservasdiv: {
        display: "flex",
        justifyContent: "center",
        margin: "1rem",
        flexDirection: "column",
    },
}));

/**appbar fixed o static */
const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);

    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClick2 = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClose2 = () => {
        setAnchorE2(null);
    };

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
                        <Grid item sm={1.2} md={1.1} >
                            <div className={classes.button}>

                                <IconButton onClick={handleClick2}>
                                    <Badge badgeContent={3} color="secondary">
                                        <EventIcon variant="contained" classes={{ root: classes.rootbutton }}></EventIcon>
                                    </Badge>
                                </IconButton>
                                <div className="menudiv">
                                    <Grid container>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorE2}
                                            keepMounted
                                            open={Boolean(anchorE2)}
                                            onClose={handleClose2}
                                            className={classes.Menu}
                                        >
                                            <Typography className={classes.MenuPerfil} variant="h5">Reservas</Typography>

                                            <div className={classes.reservasdiv}>
                                                <Reserva image={LogoRes} />
                                                <ReservaFinalizada image={LogoRes}/>
                                                <ReservaFinalizada image={LogoRes}/>
                                            </div>
                                        </Menu>
                                    </Grid>

                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={1.2} >
                            <div className={classes.button} >
                                <IconButton onClick={handleClick}>
                                    <AccountCircleIcon variant="contained" classes={{ root: classes.rootbutton }}></AccountCircleIcon>
                                </IconButton>
                                <div className="menudiv">
                                    <Grid container>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            className={classes.Menu}
                                        >
                                            <Typography className={classes.MenuPerfil} variant="h5">Perfil</Typography>
                                            <div className={classes.divPerfil}>
                                                <div>
                                                    <AccountBoxIcon className={classes.imagenUsu}></AccountBoxIcon>
                                                </div>
                                                <div className={classes.divinfo}>
                                                    <Typography>Pepito Perez</Typography>
                                                    <Typography >3121234488</Typography>
                                                </div>
                                            </div>

                                            <div className={classes.profilemenuButondiv}>
                                                <IconButton className={classes.profilemenuButonIcon}>
                                                    <Typography className={classes.profilemenuButon}>Metodo de pago</Typography>
                                                </IconButton>
                                            </div>

                                            <div className={classes.profilemenuButondiv}>
                                                <IconButton className={classes.profilemenuButonIcon}>
                                                    <Typography className={classes.profilemenuButon}>Actualizar</Typography>
                                                </IconButton>
                                            </div>

                                            <div className={classes.profilemenuButondiv}>
                                                <IconButton className={classes.profilemenuButonIcon}>
                                                    <Typography className={classes.profilemenuButon}>Ayuda</Typography>
                                                </IconButton>
                                            </div>

                                        </Menu>
                                    </Grid>

                                </div>


                            </div>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar

