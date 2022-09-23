import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Row from "./Row";
import Grid from '@mui/material/Grid'; // Grid version 1
import {Draggable} from 'react-beautiful-dnd';


const Column = ({key, column, tasks}) => {
    console.log({tasks})
    return (
        <Draggable draggableId="aaa">
            {(provided) => (
                <Grid xs={4} {...provided.draggableProps}
                      {...provided.draggableProps}
                      ref={provided.ref}>

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