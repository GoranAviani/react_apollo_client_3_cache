import React, {useState} from "react";

import {Button, TextField} from "@mui/material";

import './Search.css'

const Search = ({searchCityAPIHandler}) => {
    const [cityName, setCityName] = useState("")

    const searchHandler = (e) => {
        setCityName(e.target.value)

    }

    const searchFormHandler = (e) => {
        e.preventDefault()
        searchCityAPIHandler(cityName)
    }

    return (
        <form onSubmit={searchFormHandler} className="search">
            <TextField id="filled-basic" label="Search" variant="outlined" value={cityName}
                       onChange={searchHandler}/>
            <Button type="submit" variant="contained">Search</Button>
        </form>
    )
}

export default Search;