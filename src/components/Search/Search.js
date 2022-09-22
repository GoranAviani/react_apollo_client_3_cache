import React, {useState, useRef} from "react";

import {Button, TextField} from "@mui/material";

import './Search.css'

const Search = ({searchCityAPIHandler}) => {
    const [cityName, setCityName] = useState("")
    const cityInputRef = useRef();

    const searchFormHandler = (e) => {
        e.preventDefault()
        searchCityAPIHandler(cityInputRef)
    }

    return (
        <form onSubmit={searchFormHandler} className="search">
            <TextField id="filled-basic" label="Search" variant="outlined" ref={cityInputRef}/>
            <Button type="submit" variant="contained">Search</Button>
        </form>
    )
}

export default Search;