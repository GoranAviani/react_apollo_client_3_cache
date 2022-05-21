import React from "react";
import './DefaultCities.css'
import {Button} from "@mui/material";

const DefaultCities = () => {



    return (
        <div className="defaultCities">
            <div className="defaultCity">
                <div className="defaultCityName">city</div>
                <div className="defualtCityIcon">
                    icon
                </div>
                <div className="defaultCityTemperature">
                    18C
                </div>
                <Button>Open</Button>
            </div>



            <div className="defaultCity">
                <div className="defaultCityName">City name</div>
                <div className="defualtCityIcon">
                    Icon
                </div>
                <div className="defaultCityTemperature">
                    18C
                </div>
                <Button>Open</Button>
            </div><div className="defaultCity">
                <div className="defaultCityName">city</div>
                <div className="defualtCityIcon">
                    icon
                </div>
                <div className="defaultCityTemperature">
                    18C
                </div>
                <Button>Open</Button>
            </div><div className="defaultCity">
                <div className="defaultCityName">city</div>
                <div className="defualtCityIcon">
                    Ikona
                </div>
                <div className="defaultCityTemperature">
                    18C
                </div>
                <Button>Open</Button>
            </div><div className="defaultCity">
                <div className="defaultCityName">city</div>
                <div className="defualtCityIcon">
                    icon
                </div>
                <div className="defaultCityTemperature">
                    18C
                </div>
                <Button>Open</Button>
            </div>




        </div>
    )
}

export default DefaultCities;