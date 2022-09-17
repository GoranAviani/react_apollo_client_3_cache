import React from "react";
import {Button} from "@mui/material";

import './LoginRegister.css'

const RegistrationForm = () => {

    return (
        <div className="loginregister">
            REGISTRATION FORM
            Already have account? <Button variant="outlined">
            Login
        </Button>
        </div>
    )
}


export default RegistrationForm;