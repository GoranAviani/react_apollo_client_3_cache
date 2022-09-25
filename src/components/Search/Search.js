import React, {useState, useEffect, useRef} from "react";

import {Button, TextField} from "@mui/material";

import './Search.css'

const Search = ({searchCityAPIHandler}) => {
    const cityInputRef = useRef();

    const searchFormHandler = (e) => {
        e.preventDefault()
        searchCityAPIHandler(cityInputRef.current.value)
    }

    return (
        <form onSubmit={searchFormHandler} className="search">
            <TextField id="filled-basic" label="Search" variant="outlined" inputRef={cityInputRef}/>
            <Button size="large" type="submit" variant="contained">Search</Button>
        </form>
    )
}

export default Search;