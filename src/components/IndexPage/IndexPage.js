import React, {useState} from "react";

import SearchSection from "../SearchSection/SearchSection";
import DefaultCities from "../DefaultCities/DefaultCities";
import Footer from "../Footer/Footer";
import ResultSearchedCity from "../ResultSearchedCity/ResultSearchedCity";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";

import {useSearchCityAPI} from "../../hooks/api/useSearchCityAPI";

import './IndexPage.css'
import '../../css/GlobalContainer.css'
import useWindowDimensions from "../../hooks/window/useWindowDimensions";
import {client} from "../../index";
import {USER_DATA} from "../../apollo/cache/queries/userData";
import {TODO_LIST} from "../../apollo/cache/queries/todo";

const IndexPage = () => {

    const [searchedCityDetails, setSearchedCityDetails] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [accessKey, setAccessKey] = useState()

    const searchCityAPIHandler = (cityName) => {
        /* check input here*/
        const userData1 = client.readQuery({
            query: USER_DATA,
        })
        console.log({userData1})
        console.log(`user name: ${userData1.userDataCache.name}`)

        client.writeQuery({
            query: USER_DATA, data: {
                userDataCache: {
                    ...userData1.userDataCache,
                    favourite_toy: 'little red car'
                }
            }
        })


        ////
        const todo1 = client.readQuery({
            query: TODO_LIST,
            variables: {
                id: 6,
            },
        });
        const todo2 = client.readQuery({
            query: TODO_LIST,
            variables: {
                id: 5,
            },
        });
        console.log({todo1})
        console.log({todo2})

        useSearchCityAPI(accessKey, setAccessKey, cityName, setSearchedCityDetails, setIsLoading)
    }
    const windowDimension = useWindowDimensions()

    return (
        <div className="globalContainer">

            <div className="indexPage">
                <Navigation setSearchedCityDetails={setSearchedCityDetails}/>
                <SearchSection searchCityAPIHandler={searchCityAPIHandler}/>
                <div className="globalCitiesContainer">
                    {isLoading ? <Loader/> : searchedCityDetails ?
                        <ResultSearchedCity searchedCityDetails={searchedCityDetails}/> :
                        <DefaultCities windowDimension={windowDimension}/>}
                </div>
                <Footer/>
            </div>
        </div>

    )
}

export default IndexPage;