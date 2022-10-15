import React, {useState, useEffect, useRef} from "react";

import {Button, TextField} from "@mui/material";

import './Search.css'
import {USER_DATA} from "../../apollo/cache/queries/totoList";
import {client} from "../../index";

const Search = ({searchCityAPIHandler}) => {
    const cityInputRef = useRef();

    const searchFormHandler = (e) => {
        e.preventDefault()
        client.writeQuery({
            query: USER_DATA, data: {
                userDataCache: {
                    name: 'Oliver',
                    lastname: "Aviani",
                }
            }
        })
        // write list of objects to apollo cache
        /*
        client.writeQuery({
            query: USER_DATA, data: {
                userDataCache: [{
                    id: '111',
                    name: '1111',
                    lastname: "2222",
                    email: '',
                    address: ''
                }, {
                    id: '222',
                    name: '1111',
                    lastname: "2222",
                    email: '',
                    address: ''
                }]
            }
        })

         */
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