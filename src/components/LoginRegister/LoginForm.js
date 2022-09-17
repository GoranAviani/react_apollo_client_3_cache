import React from "react";
import {Button} from "@mui/material";

import './LoginRegister.css'

const LoginForm = () => {

    return (
        <div className="loginregister">
        USERNAME:
            <br/>
                        <br/>

            PASSWORD:
                        <br/>
            <br/>

            Dont have account? <Button variant="outlined">
            Register
        </Button>
        </div>
    )
}


export default LoginForm;