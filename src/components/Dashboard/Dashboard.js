import Column from "./partials/Column";
import React from 'react'
import initialData from "./static/initialData";
import {useState} from "react";
import {DragDropContext} from 'react-beautiful-dnd';

const Dashboard = () => {
    const [initialData1, setInitialData] = useState(initialData)
    const onDragEnd = result => {

    }


    return (
        <DragDropContext

        >
            {initialData1.columnOrder.map((columnId) => {
                const column = initialData1.columns[columnId];
                const tasks = column.taskIds.map(taskId => initialData1.tasks[taskId]);

                return <Column key={column.id} column={column} tasks={tasks}/>;
            })}
        </DragDropContext>
    )

}

export default Dashboard;