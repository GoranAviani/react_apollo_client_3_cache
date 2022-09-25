import onDragEndBoardCicrularLogic from "./onDragEndBoardCicrularLogic";

const onDragEnd = (result, dbColumns, setDbColumns) => {

    if (!result.destination) return;
    const {source, destination} = result;

    // Check if source and destination objects dont belong to same column
    if (source.droppableId !== destination.droppableId) {
        const startingColumn = dbColumns[source.droppableId];
        const destinationColumn = dbColumns[destination.droppableId];
        const startingColumnItems = [...startingColumn.items];
        const destinationColumnItems = [...destinationColumn.items];


        const [removed] = startingColumnItems.splice(source.index, 1); // delete item by getting his id
        destinationColumnItems.splice(destination.index, 0, removed); // add the moved/deleted item on position index id (0,1,2,3...) destination.index
        // set new items list to columns state
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
        if (destinationColumnItems.length > 3) {
            onDragEndBoardCicrularLogic(source, destination, startingColumn, destinationColumn, destinationColumnItems, startingColumnItems, dbColumns, setDbColumns)
        }
    } else {
        // dropping to same column
        const column = dbColumns[source.droppableId]; // get column id
        const copiedColumnItems = [...column.items]; // all items
        const [removedItem] = copiedColumnItems.splice(source.index, 1); // remove moved the item by its source position id (index)
        copiedColumnItems.splice(destination.index, 0, removedItem); // add the removedItem to the destination position (index)
        setDbColumns({ // add all columns, then overwrite the affected columns by providing new values for items keysk
            ...dbColumns,
            [source.droppableId]: {
                ...column,
                items: copiedColumnItems
            }
        });
    }


}

export default onDragEnd