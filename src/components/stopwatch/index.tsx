import Button from "../button";
import Watch from "./watch";
import style from "./Stopwatch.module.scss"
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
    selected: ITask | undefined
    endTask: () => void
}

export default function Stopwatch({selected, endTask}: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected]);

    function countdown(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return countdown(counter - 1);
            }
            endTask();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch time={time} />
            </div>
            <Button onClick={() => countdown(time)} text="Começar!"/>
        </div>
    )
}