import React from 'react'
import Typography from "@mui/material/Typography";
import {Draggable} from 'react-beautiful-dnd';
import Box from '@mui/material/Box';

const Row = ({key, taska, index}) => {
    return (
        <Draggable draggableId={taska.id} index={index}>
            {(provided) => (
                <Box {...provided.draggableProps}
                     {...provided.draggableProps}
                     inputRef={provided.ref}>

                    {taska.content}

                </Box>
            )}

        </Draggable>

    )
}


export default Row