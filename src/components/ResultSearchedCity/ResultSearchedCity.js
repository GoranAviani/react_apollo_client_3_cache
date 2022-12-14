import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Switch, {SwitchProps} from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
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
                            <CardMedia
                                sx={{objectFit: "contain"}}
                                component="img"
                                image={searchedCityDetails.data.current.condition.icon}
                                alt={searchedCityDetails.data.current.condition.text}
                            />
                        </div>
                        <div className="currentTemperature">
                            <Typography sx={{fontWeight: 'bold'}} variant="h2"
                                        component="div">
                                {searchedCityDetails.data.current.temp_c}
                            </Typography>
                            <div className="temperatureChoice">
                                <ButtonGroup variant="text" aria-label="text button group">
                                    <Button>°C</Button>
                                    <Button>°F</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                    <div className="currentOtherNumerals">
                        <Typography align='center' variant="h6"
                                    component="div">
                            {TEXT.feelsLike}
                            {searchedCityDetails.data.current.feelslike_c}

                        </Typography>
                        <div>
                            <div className="lowestTemperatureTitle">Daily lowest</div>
                            <div className="lowestTemperatureNumber">{searchedCityDetails.data.cityName}</div>
                        </div>
                        <div>
                            <div className="highestTemperatureTitle">Daily highest</div>
                            <div className="highestTemperatureNumber">****</div>
                        </div>
                    </div>

                </div>
                <div className="searchedCityRightSide">

                    <div className="searchedCityOtherDetails">
                        <div className="citsearchedCityInfoName">
                            <Typography variant="h5">{searchedCityDetails.data.location.name}</Typography>
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