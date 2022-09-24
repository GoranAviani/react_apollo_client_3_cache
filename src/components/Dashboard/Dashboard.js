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

        // checking if droppable id done belong to same column
        if (source.droppableId !== destination.droppableId) {
            const startingColumn = dbColumns[source.droppableId];
            const destinationColumn = dbColumns[destination.droppableId];
            const startingColumnItems = [...startingColumn.items];
            const destinationColumnItems = [...destinationColumn.items];
            const [removed] = startingColumnItems.splice(source.index, 1);
            destinationColumnItems.splice(destination.index, 0, removed);
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