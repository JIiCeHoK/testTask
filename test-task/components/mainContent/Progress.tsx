import React from "react";
import Image from "next/image";

import styles from "../../styles/componentStyles/Progress.module.scss";
import timeScale from "../../assets/images/шкала времени.png";
import left from "../../assets/icons/left.png";
import right from "../../assets/icons/right.png";

import TimeStepper from "../TimeStepper";

interface Iboard {
    id: number;
    date: string;
    text: string;
}

const mockData: Array<Iboard> = [
    {
        id: 0,
        date: "12 августа 2022",
        text: "Подписание скорректированной системы МИНОБРНАУКИ. Формирование дополнительных соглашений.",
    },
    {
        id: 1,
        date: "24 августа 2022",
        text: "Интеграция образовательной, научной и инновационной деятельности. Вовлечение компетенций и ресурсов партнеров УрФУ в базовые процессы, в т.ч. образование и работу с молодежью.",
    },
    {
        id: 2,
        date: "15 сентября 2022",
        text: "Подписание скорректированной системы МИНОБРНАУКИ. Формирование дополнительных соглашений.",
    },
    {
        id: 3,
        date: "20 октября 2022",
        text: "Подписание скорректированной системы МИНОБРНАУКИ. Формирование дополнительных соглашений.",
    },
];

export default function Progress() {
    return (
        <>
            <div className={styles.container}>
                <Image src={left} alt="лево" />
                {mockData.map((board: Iboard) => (
                    <div key={board.id} className={styles.container_board}>
                        <div>{board.date}</div>
                        <div>{board.text}</div>
                        {/* <div className={styles.step_container}>
                            <div
                                className={styles.step_container_ellipse}
                            ></div>
                            <div className={styles.step_container_line}></div>
                        </div> */}
                    </div>
                ))}
                <Image src={right} alt="право" />
            </div>
            {/* <TimeStepper /> */}
            <Image src={timeScale} alt="шкала времени" />
        </>
    );
}
