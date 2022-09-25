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

                    </div>
                }
            </Droppable>

        </div>
    );

}

export default Column