import React, {useState} from "react";

import {Link} from "react-router-dom";
import initialData from './static/initialData';
import Column from "./partials/Column";
import {DragDropContext} from "react-beautiful-dnd";
import {Droppable} from 'react-beautiful-dnd';

const Dashboard = () => {
    const [initialWeatherData, setInitialWeatherData] = useState(initialData)
    const onDragEnd = result => {

    }
    return (
        <div>
            <Link to="/">Index</Link>

            this is dashboard
            <DragDropContext>
                <Droppable droppableId="characters">
                    {(provided) => (
                        initialWeatherData.columnOrder.map((columnId) => {
                            const column = initialWeatherData.columns[columnId];
                            const tasks = column.taskIds.map(taskId => initialWeatherData.tasks[taskId]);
                            return <Column key={column.id} column={column} tasks={tasks}/>;

                        }))}

                </Droppable>


            </DragDropContext>


        </div>
    )
}

export default Dashboard;