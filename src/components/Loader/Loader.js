import React from "react";

import CircularProgress from '@mui/material/CircularProgress';

import './Loader.css'

// using material components
const Loader = () => {
    return (
        <div className="loader">
            <CircularProgress/>
        </div>
    )

}

export default Loader;
