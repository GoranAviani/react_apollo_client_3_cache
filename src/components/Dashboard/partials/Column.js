import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Row from "./Row";

const Column = ({key, column, tasks}) => {
    console.log({tasks})
    return (

        <Box
            sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        ><Typography align='center' variant="h6">
            {column.title}
        </Typography>

            <Box inputRef={provided.ref}
                 {...provided.droppableProps}>
                {tasks.map((task, index) => {
                    return <Row key={task.id} taska={task} index={index}/>
                })}
                {provided.placeholder}

            </Box>
            }


        </Box>
    )
}


export default Column;