import Button from "../button";
import Watch from "./watch";
import style from "./Stopwatch.module.scss"

export default function Stopwatch() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch />
            </div>
            <Button text="Começar!"/>
        </div>
    )
}