import Image from "next/image";
import { useState } from "react";

import Progress from "../components/mainContent/Progress";
import Projects from "../components/mainContent/Projects";
import Budget from "../components/mainContent/Budget";
import Navigation from "../components/Navigation";

import styles from "../styles/Home.module.scss";
import Back from "../assets/images/back.png";

interface Ititle {
    id: string;
    titleName: string;
}

export default function Home() {
    const [selectedElement, setSelectedElement] = useState("progress");
    const titles: Array<Ititle> = [
        {
            id: "progress",
            titleName: "Ход исполнения Программы развития",
        },
        {
            id: "projects",
            titleName: "Количество проектов",
        },
        {
            id: "budget",
            titleName: "Освоение бюджета по Программе развития 2021-2030 гг.",
        },
    ];
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Image src={Back} alt="back" />
                <div className={styles.title}>
                    Ключевые индикаторы программы
                </div>
                <Navigation
                    titles={titles}
                    selectedElement={selectedElement}
                    setSelectedElement={setSelectedElement}
                />
            </div>

            {(() => {
                switch (selectedElement) {
                    case "progress":
                        return <Progress />;
                    case "projects":
                        return <Projects />;
                    case "budget":
                        return <Budget />;
                }
            })()}
        </div>
    );
}
