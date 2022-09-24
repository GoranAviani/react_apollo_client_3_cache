import React from 'react'
import {useState} from "react";
import WeatherBoard from "../WeatherBoard/WeatherBoard";

const Dashboard = () => {
    const [dbColumns, setDbColumns] = useState(backendColumns)


    return (
        <>
            <WeatherBoard/>
        </>

    )

}

export default Dashboard;