import { IconButton, Typography } from '@material-ui/core';
import React from 'react';
import "./Endbar.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Endbar() {

    return (
        <div className="root endbar">
            <div>
            <IconButton>
                <Typography className="color">Contacto</Typography>
            </IconButton>
            <IconButton >
                <Typography className="color">Sobre nosotros</Typography>
            </IconButton>
            </div>
            <div>
            <IconButton>
                <FacebookIcon className="color"/>
            </IconButton>
            <IconButton>
                <InstagramIcon className="color"/>
            </IconButton>
            <IconButton>
                <LinkedInIcon className="color"/>
            </IconButton>
            </div>
            
            
        </div>
    )
}