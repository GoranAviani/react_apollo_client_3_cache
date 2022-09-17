import React from "react";
import {Button} from "@mui/material";

import './LoginRegister.css'

const LoginRegister = () => {

    return(
        <div className="loginregister">
            <Button variant="outlined">
                Login
            </Button>
            <Button variant="outlined">
                Register
            </Button>
        </div>
    )
}


export default LoginRegister;