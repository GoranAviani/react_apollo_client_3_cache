import React from "react";

import './LoginRegister.css'
import {Link} from "react-router-dom";

const LoginForm = () => {

    return (
        <div className="loginregister">
            USERNAME:
            <br/>
            <br/>

            PASSWORD:
            <br/>
            <br/>

            Dont have account? <Link to="/registration">Registraion</Link>

        </div>
    )
}


export default LoginForm;