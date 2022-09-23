import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Row from "./Row";
import Grid from '@mui/material/Grid'; // Grid version 1
import {Draggable} from 'react-beautiful-dnd';


const Column = ({key, column, tasks}) => {
    console.log({tasks})
    return (
        <Draggable draggableId={taska.id} index={index}>
            {(provided) => (
                <Grid xs={4} {...provided.draggableProps}
                      {...provided.draggableProps}
                      ref={provided.ref}>

                    <Typography align='center' variant="h6">
                        {column.title}
                    </Typography>

                    <Item inputRef={provided.ref}
                          {...provided.droppableProps}>
                        {tasks.map((task, index) => {
                            return <Row key={task.id} taska={task} index={index}/>
                        })}
                        {provided.placeholder}

                    </Item>
                    }


                </Grid>
            )}</Draggable>

    )
}


export default Column;