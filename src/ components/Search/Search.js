import React, {useState} from "react";

import {TextField} from "@mui/material";

const Search = () => {
    const [userSearch, setUserSearch] = useState("")



    return(
        <div>
            <TextField id="standard-basic" label="Search" variant="standard" onChange={searchHandler}/>
        </div>
    )
}

export default Search;