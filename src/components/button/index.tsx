import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component<{ text: string, type?: "button" | "submit" | "reset" | undefined}> {
    render() {
        const { type = "button" } = this.props
        return (
            <button type={type} className={style.botao}>
                {this.props.text}
            </button>
        )
    }
}

export default Button;