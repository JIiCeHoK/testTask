import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

import styles from "../../styles/componentStyles/Progress.module.scss";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";

interface Iboard {
    date: string;
    text: string;
}

const mockData: Array<Iboard> = [
    {
        date: "12 августа 2022",
        text: "Подписание скорректированной системы МИНОБРНАУКИ. Формирование дополнительных соглашений.",
    },
    {
        date: "24 августа 2022",
        text: "Интеграция образовательной, научной и инновационной деятельности. Вовлечение компетенций и ресурсов партнеров УрФУ в базовые процессы, в т.ч. образование и работу с молодежью.",
    },
    {
        date: "15 сентября 2022",
        text: "Подписание скорректированной системы МИНОБРНАУКИ. Формирование дополнительных соглашений.",
    },
    {
        date: "20 октября 2022",
        text: "Подписание скорректированной системы МИНОБРНАУКИ. Формирование дополнительных соглашений.",
    },
    {
        date: "12 августа 2022",
        text: "Подписание скорректированной системы МИНОБРНАУКИ. Формирование дополнительных соглашений.",
    },
    {
        date: "24 августа 2022",
        text: "Интеграция образовательной, научной и инновационной деятельности. Вовлечение компетенций и ресурсов партнеров УрФУ в базовые процессы, в т.ч. образование и работу с молодежью.",
    },
];

export default function Progress() {
    const [data, setData] = useState(mockData);

    function sliceIntoChunks(arr: Iboard[]) {
        const res = [];
        for (let i = 0; i < arr.length; i += 4) {
            const chunk = arr.slice(i, i + 4);
            res.push(chunk);
        }
        return res;
    }

    const chunksArrayData = sliceIntoChunks(data);
    return (
        <>
            <Carousel
                interval={null}
                nextIcon={
                    <Image alt=" " src={right} style={{ width: "20px" }} />
                }
                prevIcon={<Image alt=" " src={left} />}
            >
                {chunksArrayData.map((chunk: Iboard[], index) => (
                    <Carousel.Item key={index}>
                        <div className={styles.container}>
                            {chunk.map((board: Iboard, index: number) => (
                                <div
                                    key={index}
                                    className={styles.container_board}
                                >
                                    <div>{board.date}</div>
                                    <div>{board.text}</div>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}
