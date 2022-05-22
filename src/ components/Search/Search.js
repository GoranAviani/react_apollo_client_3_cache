import React, {useState} from "react";

import {Button, TextField} from "@mui/material";

import './Search.css'

const Search = ({searchCityAPI}) => {
    const [userSearch, setUserSearch] = useState("")

    const searchHandler = (e) => {
        setUserSearch(e.target.value)
        console.log(userSearch)

    }

    const searchFormHandler = (e) => {
        e.preventDefault()
        console.log("form")
        console.log(userSearch)
        searchCityAPI(userSearch)
        // call index page api fun that will render searchedcity.js
    }

    return (
        <form onSubmit={searchFormHandler} className="search">
            <TextField id="standard-basic" label="Search" variant="standard" value={userSearch}
                       onChange={searchHandler}/>
            <Button type="submit" variant="contained">Search</Button>
        </form>
    )
}

export default Search;