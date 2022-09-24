import Column from "./partials/Column";
import React from 'react'
import backendData from "./static/backendData";
import backendColumns from "./static/backendColumns";
import {useState} from "react";
import {DragDropContext} from 'react-beautiful-dnd';

const Dashboard = () => {
    const [dbColumns, setDbColumns] = useState(backendColumns)
    const [citiesData, setCitiesData] = useState(backendData)

    const onDragEnd = result => {

    }


    return (
        <div style={{display: "flex", justifyContent: "center", height: "100%"}}>

            <DragDropContext

            >
                {initialData1.columnOrder.map((columnId) => {
                    const column = initialData1.columns[columnId];
                    const tasks = column.taskIds.map(taskId => initialData1.tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={tasks}/>;
                })}
            </DragDropContext>
        </div>

    )

}

export default Dashboard;