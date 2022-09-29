import Item from './item/';
import style from  './List.module.scss';
import { ITask } from '../../types/task';

function List({ taskList }: {taskList: ITask[]}) {

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