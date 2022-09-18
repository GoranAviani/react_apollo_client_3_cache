import React from "react";
import {Link} from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import './LoginRegister.css'
import {Button} from "@mui/material";
import '../../css/Button.css'

const LoginRegister = () => {

    return (
        <div className="loginregister">
            <div className="button-small center">

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

        </div>
    )
}


export default LoginRegister;