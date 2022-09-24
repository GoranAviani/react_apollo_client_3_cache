import Column from "./partials/Column";
import React from 'react'
import backendColumns from "./static/backendColumns";
import {useState} from "react";
import {DragDropContext} from 'react-beautiful-dnd';

const WeatherBoard = () => {
    const [dbColumns, setDbColumns] = useState(backendColumns)


    return (
        <div style={{display: "flex", justifyContent: "center", height: "100%"}}>

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