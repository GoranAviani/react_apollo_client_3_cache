import Column from "./partials/Column";
import React from 'react'
import backendColumns from "./static/backendColumns";
import {useState} from "react";
import {DragDropContext} from 'react-beautiful-dnd';

const Dashboard = () => {
    const [dbColumns, setDbColumns] = useState(backendColumns)

    const onDragEnd = (result, dbColumns, setDbColumns) => {

        if (!result.destination) return;
        const {source, destination} = result;
        console.log({source})
        console.log({destination})

        // Check if source and destination objects dont belong to same column
        if (source.droppableId !== destination.droppableId) {
            const startingColumn = dbColumns[source.droppableId];
            const destinationColumn = dbColumns[destination.droppableId];
            const startingColumnItems = [...startingColumn.items];
            const destinationColumnItems = [...destinationColumn.items];

            const [removed] = startingColumnItems.splice(source.index, 1); // delete item by getting his id
            destinationColumnItems.splice(destination.index, 0, removed); // add the moved/deleted item on position index id (0,1,2,3...) destination.index
            setDbColumns({
                ...dbColumns,
                [source.droppableId]: {
                    ...startingColumn,
                    items: startingColumnItems
                },
                [destination.droppableId]: {
                    ...destinationColumn,
                    items: destinationColumnItems
                }
            });
        }


    }


    return (
        <div style={{display: "flex", justifyContent: "center", height: "100%"}}>

            <DragDropContext
                onDragEnd={result => onDragEnd(result, dbColumns, setDbColumns)}

            >
                {Object.entries(dbColumns).map(([columnKey, columnValue], index) => {

                    return <Column columnKey={columnKey} columnValue={columnValue} index={index}/>;
                })}
            </DragDropContext>
        </div>

    )

}

export default Dashboard;