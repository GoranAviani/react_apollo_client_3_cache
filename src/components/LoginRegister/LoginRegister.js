import React from "react";
import {Link} from "react-router-dom";

import {Button} from "@mui/material";

import './LoginRegister.css'

const LoginRegister = () => {

    return (
        <div className="loginregister">
            <Link to="/login">Login</Link>
            <Button variant="outlined">
                Register
            </Button>
        </div>
    )
}


export default LoginRegister;