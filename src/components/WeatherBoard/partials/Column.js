import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import ColumnItem from './ColumnItem';
import '../css/Column.css'


const Column = ({columnKey, columnValue, index}) => {

    return (
        <div className="column"
             key={columnKey}
        >
            <h2>{columnValue.name}</h2>
            <div style={{margin: 8}}>

                <Droppable droppableId={columnKey} key={columnKey}>
                    {(provided, snapshot) =>
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {columnValue.items.map((item, index = {index}) => {
                                console.log({index})
                                return <ColumnItem item={item} index={index}/>

                            })}

                        </div>
                    }
                </Droppable>
            </div>

        </div>
    );

}

export default Column