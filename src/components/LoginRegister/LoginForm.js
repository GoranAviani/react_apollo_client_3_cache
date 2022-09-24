import React from "react";

import './LoginRegister.css'
import {Link} from "react-router-dom";
import SimpleNavigation from "../Navigation/SimpleNavigation";
import {Button} from "@mui/material";

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

                <Button label="Log in" variant="contained" color="primary"
                        component={Link}
                        to="/dashboard"/>

            </div>
        </>


    )
}


export default LoginForm;