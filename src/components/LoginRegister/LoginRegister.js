import React from "react";
import './LoginRegister.css'
import {Chip} from "@mui/material";
import '../../css/Button.css'
import {Link} from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

const LoginRegister = () => {

    return (
        <div className="loginregister">
            <div className="button-small center">
                <Chip label="Log in" variant="outlined" color="primary"
                      component={Link}
                      to="/login"/>
            </div>

        </div>
    )
}


export default LoginRegister;