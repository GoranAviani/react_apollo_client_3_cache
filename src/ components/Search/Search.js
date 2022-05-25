import React, {useState} from "react";

import {Button, TextField} from "@mui/material";

import './Search.css'

const Search = ({searchCityAPIHandler}) => {
    const [userSearch, setUserSearch] = useState("")

    const searchHandler = (e) => {
        setUserSearch(e.target.value)
        console.log(userSearch)

    }

    const searchFormHandler = (e) => {
        e.preventDefault()
        searchCityAPIHandler(userSearch)
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