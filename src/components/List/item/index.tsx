import { ITask } from '../../../types/task';
import style from './Item.module.scss';

interface Props extends ITask{
    getTask: (selectedTask: ITask) => void
}

export default function Item({name, time, selected, completed, id, getTask}: Props) {
    return (
        <li className={`${style.item} ${selected ? style.itemSelecionado : ''}`}
            onClick={() => getTask({name, time, selected, completed, id})}>
            <h3>{ name }</h3>
            <span>{ time }</span>
        </li>
    )
}