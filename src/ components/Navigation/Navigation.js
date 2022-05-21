import React from 'react';

import {Button} from "@mui/material";

import './Navigation.css'

const Navigation = () =>{

    return(
        <div class="Navigation">
            <Button variant="outlined">
                Login
            </Button>
            <Button variant="outlined">
                Register
            </Button>
        </div>
    )
}

export default Navigation;