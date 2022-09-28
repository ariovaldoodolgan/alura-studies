import React from 'react';
import Button from '../button';
import style from './Form.module.scss';

class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input  
                        type="text"
                        name='tarefa'
                        id='tarefa'
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
                        id='time'
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button text="Adicionar"/>
            </form>
        )
    }
}

export default Form;