import React from "react";

import {Link} from "react-router-dom";

import './Navigation.css'
import LoginRegister from "../LoginRegister/LoginRegister";
import {Button} from "@mui/material";

//             <Link to="/dashboard">Dashboard</Link>
const Navigation = ({setSearchedCityDetails}) => {
    return (
        <div className="navigation">
            
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/" onClick={() => {
                setSearchedCityDetails(null)
            }}
            >Index
            </Button>

            <LoginRegister/>

        </div>
    )
}

export default Navigation;