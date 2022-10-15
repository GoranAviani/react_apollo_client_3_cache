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
import {USER_DATA} from "../../apollo/cache/queries/totoList";


const IndexPage = () => {

    const [searchedCityDetails, setSearchedCityDetails] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [accessKey, setAccessKey] = useState()

    const searchCityAPIHandler = (cityName) => {
        /* check input here*/
        const userData1 = client.readQuery({
            query: USER_DATA,
            variables: {
                id: 'userData'
            }
        })
        console.log({userData1})
        // console.log(`user name: ${userData1.userDataCache.name}`)

        client.writeQuery({
            query: USER_DATA, data: {
                userDataCache: {
                    address: 'Tyresö'
                },
                variables: {
                    id: 'userData'
                }
            }
        })

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