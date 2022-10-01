import Item from './item/';
import style from  './List.module.scss';
import { ITask } from '../../types/task';

interface Props {
    taskList: ITask[],
    getTask: (selectedTask: ITask) => void
}

function List({ taskList, getTask }: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {taskList.map(item => (
                    // <Item key={index} name={item.name} time={item.time}/>
                    <Item
                        getTask={getTask}
                        key={item.id} 
                        {...item}/>
                ))}
            </ul>
        </aside>
    )
}

export default List;