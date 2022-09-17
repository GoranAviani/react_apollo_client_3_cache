import React from "react";

import './LoginRegister.css'
import {Link} from "react-router-dom";
import SimpleNavigation from "../Navigation/SimpleNavigation";

const RegistrationForm = () => {

    return (
        <>
            <SimpleNavigation/>

            <div className="loginregister">
                REGISTRATION FORM
                <br/>
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
        </>

    )
}


export default RegistrationForm;