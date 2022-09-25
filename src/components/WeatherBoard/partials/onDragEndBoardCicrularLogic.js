const onDragEndBoardCicrularLogic = (source, destination,
                                     startingColumn, destinationColumn, destinationColumnItems,
                                     startingColumnItems, dbColumns, setDbColumns) => {


    const lastElemenDestinationColumn = destinationColumnItems.pop()
    startingColumnItems.push(lastElemenDestinationColumn)

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

export default onDragEndBoardCicrularLogic;
