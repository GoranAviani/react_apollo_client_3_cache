import React, {useState} from "react";

import {Button, TextField} from "@mui/material";

const Search = () => {
    const [userSearch, setUserSearch] = useState("")

    const searchHandler = (e) => {
        setUserSearch(e.target.value)
        console.log(userSearch)

    }

    const searchFormHandler = (e) => {
        e.preventDefault()
        console.log("form")
        console.log(userSearch)
    }

    return(
        <form onSubmit={searchFormHandler}>
            <TextField id="standard-basic" label="Search" variant="standard" value={userSearch} onChange={searchHandler}/>
            <Button type="submit" variant="contained">Search</Button>
        </form>
    )
}

export default Search;