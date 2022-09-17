import React from "react";

import './LoginRegister.css'
import {Link} from "react-router-dom";
import SimpleNavigation from "../Navigation/SimpleNavigation";

const LoginForm = () => {

    return (
        <>
            <SimpleNavigation/>

            <div className="loginregister">
                USERNAME:
                <br/>
                <br/>

                PASSWORD:
                <br/>
                <br/>

                Dont have account? <Link to="/registration">Registraion</Link>

            </div>
        </>


    )
}


export default LoginForm;