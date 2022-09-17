import React from "react";

import './LoginRegister.css'
import {Link} from "react-router-dom";

const RegistrationForm = () => {

    return (
        <div className="loginregister">
            REGISTRATION FORM
            USERNAME:
            <br/>
            <br/>

            PASSWORD:
            <br/>
            email: <br/>
            address:
            <br/> <br/>
            Already have account? <Link to="/login">Login</Link>

        </div>
    )
}


export default RegistrationForm;