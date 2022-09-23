import React, {useState} from "react";

import {Link} from "react-router-dom";
import initialData from './static/initialData';
import Column from "./partials/Column";
import {DragDropContext} from "react-beautiful-dnd";
import {Droppable} from 'react-beautiful-dnd';
import Grid from '@mui/material/Grid'; // Grid version 1

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
                        <Grid container spacing={2}>


                            {initialWeatherData.columnOrder.map((columnId) => {
                                const column = initialWeatherData.columns[columnId];
                                const tasks = column.taskIds.map(taskId => initialWeatherData.tasks[taskId]);
                                return <Column {...provided.droppableProps}
                                               ref={provided.innerRef} key={column.id} column={column} tasks={tasks}/>;
                            })}

                        </Grid>

                    )


                    }

                </Droppable>
            </DragDropContext>


        </div>
    )
}

export default Dashboard;