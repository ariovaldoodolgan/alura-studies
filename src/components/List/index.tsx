import React from 'react';
import Item from './item/';
import style from  './List.module.scss';

function List() {

    let taskList = [
        {
            name: 'React',
            time: '02:00:00'
        },
        {
            name: 'Javascript',
            time: '01:00:00'
        }
    ]

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {taskList.map((item, index) => (
                    // <Item key={index} name={item.name} time={item.time}/>
                    <Item key={index} {...item}/>
                ))}
            </ul>
        </aside>
    )
}

export default List;