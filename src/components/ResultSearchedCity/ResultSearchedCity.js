import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import './ResultSearchedCity.css'

const TEXT = {
    feelsLike: "Feels like: "
}

const ResultSearchedCity = ({searchedCityDetails}) => {
    console.log({searchedCityDetails})
    /* unpack api result info */
    //JSON.stringify(searchedCityDetails.data)
    console.log(searchedCityDetails.data)
    return (
        <div className="resultSearchedCity">
            <div className="searchedCityAllDetails">
                <div className="searchedCityLeftSide">
                    <div className="searchedCityMainDetails">
                        <div className="currentWeatherIcon">
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={searchedCityDetails.data.current.condition.icon}
                                    alt={searchedCityDetails.data.current.condition.text}
                                />
                            </Card>
                        </div>
                        <div className="currentTemperature">

                            <Typography sx={{fontWeight: 'bold'}} align='center' gutterBottom variant="h2"
                                        component="div">
                                {searchedCityDetails.data.current.temp_c}
                            </Typography>
                        </div>
                    </div>

                </div>
                <div className="searchedCityOtherDetails">
                    <div className="currentTemperature">

                        <Typography align='center' gutterBottom variant="h1" component="div">
                            {searchedCityDetails.data.current.temp_c}
                        </Typography>
                        <Typography align='center' gutterBottom variant="" component="div">
                            Now
                        </Typography>
                        <Typography align='center' gutterBottom variant="h1" component="div">
                            {searchedCityDetails.data.current.feelslike_c}
                        </Typography>
                        <Typography align='center' gutterBottom variant="" component="div">
                            Feels like
                        </Typography>


                    </div>
                    <div>
                        <div className="lowestTemperatureTitle">Daily lowest</div>
                        <div className="lowestTemperatureNumber">{searchedCityDetails.data.cityName}</div>
                    </div>
                    <div>
                        <div className="highestTemperatureTitle">Daily highest</div>
                        <div className="highestTemperatureNumber">****</div>
                    </div>

                        <div>
                            <div className="weatherDescriptionTitle">Weather description</div>
                            <div className="weatherDescriptionText">{searchedCityDetails.weatherNow}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResultSearchedCity;