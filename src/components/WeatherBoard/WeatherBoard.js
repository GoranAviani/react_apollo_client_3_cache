import React from 'react'
import {useState} from "react";
import {DragDropContext} from 'react-beautiful-dnd';
import onDragEnd from "./partials/onDragEnd";

import backendColumns from "./static/backendColumns";
import Column from "./partials/Column";
import './css/weatherBoard.css'

const WeatherBoard = () => {
    const [dbColumns, setDbColumns] = useState(backendColumns)

    return (
        <div className="weatherBoard">

            <DragDropContext
                onDragEnd={result => onDragEnd(result, dbColumns, setDbColumns)}
            >
                {Object.entries(dbColumns).map(([columnKey, columnValue], index) => {

                    return <Column columnKey={columnKey} columnValue={columnValue} index={index}/>;
                })}
            </DragDropContext>
        </div>

    )

}

export default WeatherBoard;