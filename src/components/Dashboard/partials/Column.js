import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Row from "./Row";
import Grid from '@mui/material/Grid'; // Grid version 1

import {Draggable} from 'react-beautiful-dnd';


const Column = ({key, index, column, tasks}) => {
    console.log({tasks})
    return (
        <Draggable draggableId={`${column.title}`} index={index}>
            {(provided) => (
                <Grid item xs={4} ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>

                    <Typography align='center' variant="h6">
                        {column.title}
                    </Typography>


                    {tasks.map((task, index) => {
                        return <Row key={task.id} taska={task}/>
                    })}
                    {provided.placeholder}

                    }


                </Grid>
            )}</Draggable>

    )
}


export default Column;