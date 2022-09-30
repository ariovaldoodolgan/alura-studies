import Button from "../button";
import Watch from "./watch";
import style from "./Stopwatch.module.scss"
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
    selected: ITask | undefined
}

export default function Stopwatch({selected}: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected]);

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch time={time} />
            </div>
            <Button text="Começar!"/>
        </div>
    )
}