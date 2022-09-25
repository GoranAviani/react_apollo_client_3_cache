import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import ColumnItem from './ColumnItem';
import '../css/Column.css'


const Column = ({columnKey, columnValue, index}) => {
//             <h2>{columnValue.name}</h2>
    return (
        <div className="column"
             key={columnKey}
        >
            <Droppable droppableId={columnKey} key={columnKey}>
                {(provided, snapshot) =>
                    <div style={{height: '100%'}}
                         {...provided.droppableProps}
                         ref={provided.innerRef}
                    >
                        {columnValue.items.map((item, index = {index}) => {
                            console.log({index})
                            return <ColumnItem item={item} index={index}/>

                        })}
                        {provided.placeholder}
                    </div>
                }
            </Droppable>

        </div>
    );

}

export default Column