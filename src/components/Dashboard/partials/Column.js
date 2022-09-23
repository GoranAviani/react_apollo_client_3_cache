import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Task from './Row';


const Column = ({key, column, tasks}) => {

    return (
        <div>
            {column.title}
            <Droppable droppableId={column.id}>
                {provided =>
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => (
                            <Task key={task.id} task={task} index={index}/>
                        ))}
                        {provided.placeholder}
                    </div>
                }
            </Droppable>
        </div>
    );

}

export default Column