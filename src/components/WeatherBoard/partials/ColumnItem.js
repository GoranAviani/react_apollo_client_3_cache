import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import '../css/ColumItem.css'


const ColumnItem = ({item, index}) => {

    return (
        <Draggable
            key={item.id}
            draggableId={item.id}
            index={index}
        >
            {(provided, snapshot) => (
                <div className="columnItem"
                     ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     data-dragging={snapshot.isDragging}
                >
                    {item.cityName}
                    {provided.placeholder}
                </div>
            )}
        </Draggable>

    );

}

export default ColumnItem