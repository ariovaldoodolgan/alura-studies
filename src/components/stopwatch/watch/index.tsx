import style from "./Watch.module.scss";

interface Props {
    time: number | undefined
}

export default function Watch({ time = 0 }: Props) {
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    const [minuteFistPosition, minuteSecondPosition] = String(minutes).padStart(2, '0');
    const [secondFistPosition, secondSecondPosition] = String(seconds).padStart(2, '0') ;

    return(
        // serve para burlar o problema de precisar ter um elemento pai na raiz do xml
        <>
            <span className={style.relogioNumero}>{minuteFistPosition}</span>
            <span className={style.relogioNumero}>{minuteSecondPosition}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondFistPosition}</span>
            <span className={style.relogioNumero}>{secondSecondPosition}</span>
        </>
    )
}