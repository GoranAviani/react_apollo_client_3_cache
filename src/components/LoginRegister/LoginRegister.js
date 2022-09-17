import React from "react";
import {Link} from "react-router-dom";

import './LoginRegister.css'

const LoginRegister = () => {

    return (
        <div className="loginregister">
            <Link to="/login">Login</Link>
        </div>
    )
}


export default LoginRegister;