import React from "react";
import {Link} from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import './LoginRegister.css'
import {Button} from "@mui/material";

const LoginRegister = () => {

    return (
        <div className="loginregister">
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/login"
                endIcon={<LoginIcon/>}
                size="small"
            >Login
            </Button>
        </div>
    )
}


export default LoginRegister;