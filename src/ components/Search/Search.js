import React, {useState} from "react";

import {TextField} from "@mui/material";

const Search = () => {
    const [userSearch, setUserSearch] = useState("")

    const searchHandler = (e) => {
        setUserSearch(e.target.value)
        console.log(userSearch)

    }

    return(
        <div>
            <TextField id="standard-basic" label="Search" variant="standard" value={userSearch} onChange={searchHandler}/>
        </div>
    )
}

export default Search;