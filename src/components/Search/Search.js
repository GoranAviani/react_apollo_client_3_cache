import React, {useState, useEffect, useRef} from "react";

import {Button, TextField} from "@mui/material";

import './Search.css'
import {USER_DATA} from "../../apollo/cache/queries/userData";
import {client} from "../../index";
import {TODO_LIST} from "../../apollo/cache/queries/todo";

const Search = ({searchCityAPIHandler}) => {
    const cityInputRef = useRef();

    const searchFormHandler = (e) => {
        e.preventDefault()
        client.writeQuery({
            query: USER_DATA, data: {
                userDataCache: {
                    name: 'Oliver',
                    lastname: "Aviani",
                    email: '',
                    address: '',
                    favourite_toy: ''
                }
            }
        })

        ///

        client.writeQuery({
            query: TODO_LIST, data: {
                todo: {
                    id: 5,
                    text: "Aviani",
                    completed: '',
                    added_extra_field: ''
                }
            }, variables: {
                id: 5
            }
        })
        client.writeQuery({
            query: TODO_LIST, data: {
                todo: {
                    id: 6,
                    text: "Aaaaa",
                    completed: 'bbbbb',
                    added_extra_field: ''
                }
            }, variables: {
                id: 6
            }
        })
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