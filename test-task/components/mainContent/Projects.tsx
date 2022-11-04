import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import styles from "../../styles/componentStyles/Projects.module.scss";

import CustomDropdown from "../CustomDropdown";
import CustomGrid from "../CustomGrid";

const mockData = [
    {
        2022: {
            PlannedNumberProjects: 215,
            ApprovedProjects: 118,
            ApprovedProjectPortfolios: 97,
            DetailsStrategicProjects: {
                columns: [
                    "№",
                    "Направления СП",
                    "Плановое количество проектов",
                    "Одобренное количество проектов на ЭГ",
                ],
                rows: [
                    [
                        "1.",
                        "Материалы и технологии для водородной и ядерной энергетики",
                        "3",
                        "2",
                    ],
                    [
                        "2.",
                        "Дизайн и технологии функциональных материалов и систем",
                        "9",
                        "10",
                    ],
                    [
                        "3.",
                        "Благополучие человека в условиях цифровой трансформации",
                        "12",
                        "11",
                    ],
                    ["4.", "Академическое превосходство", "27", "79"],
                    [
                        "5.",
                        "Образование: кадры для научно-технологического прорыва",
                        "15",
                        "16",
                    ],
                ],
            },
        },
    },
];

export default function Projects() {
    const [selectedYear, setSelectedYear] = useState(mockData[0]);
    return (
        <div className={styles.container}>
            <CustomDropdown />
            <div className={styles.title}>
                Плановое количество проектов программы
                <span> - {selectedYear[2022].PlannedNumberProjects}</span>
            </div>
            <div className={styles.title}>
                Одобренных проектов на ЭГ
                <span> - {selectedYear[2022].ApprovedProjects}</span>
            </div>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Детализация по стратегическим проектам
                    </Accordion.Header>
                    <Accordion.Body>
                        <CustomGrid
                            data={mockData[0][2022].DetailsStrategicProjects}
                        />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Детализация по типу финансирования
                    </Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className={styles.title}>
                Одобренных портфелей проектов на ЭГ
                <span> - {selectedYear[2022].ApprovedProjectPortfolios}</span>
            </div>
            <Accordion flush>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        Детализация по стратегическим проектам
                    </Accordion.Header>
                    <Accordion.Body>
                        {/* <CustomGrid /> */}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        Детализация по типу финансирования
                    </Accordion.Header>
                    <Accordion.Body>
                        {/* <CustomGrid /> */}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
