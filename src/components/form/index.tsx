import React from 'react';
import { ITask } from '../../types/task';
import Button from '../button';
import style from './Form.module.scss';
import { v4 as uuidv4} from 'uuid';

class Form extends React.Component<{ setTask: React.Dispatch<React.SetStateAction<ITask[]>> }> {
    state = {
        name: "",
        time: "00:00"
    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTask(oldTasks => 
            [
                ...oldTasks,
                {
                    ...this.state,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );
        this.setState({
            name: "",
            time: "00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input  
                        type="text"
                        name='tarefa'
                        id='tarefa'
                        value={this.state.name}
                        onChange={event => this.setState({...this.state, name: event.target.value})}
                        placeholder='O que você quer estudar?'
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='time'>
                        Tempo
                    </label>
                    <input  
                        type="time"
                        step="1"
                        name='time'
                        value={this.state.time}
                        onChange={event => this.setState({...this.state, time: event.target.value})}
                        id='time'
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button type="submit" text="Adicionar"/>
            </form>
        )
    }
}

export default Form;