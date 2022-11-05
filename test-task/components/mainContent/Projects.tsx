import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import PieChartComponent from "../chartsComponents/PieChartComponent";
import CustomDropdown from "../CustomDropdown";
import CustomGrid from "../CustomGrid";

import styles from "../../styles/componentStyles/Projects.module.scss";

const mockYears = [2022, 2023];

interface IdataSelectedYear {
    PlannedNumberProjects: number;
    ApprovedProjects: number;
    ApprovedProjectPortfolios: number;
    DetailsStrategicProjects: {
        columns: string[];
        rows: Array<string[]>;
    };
    DetailsTypeFinancing: {
        columns: string[];
        rows: Array<string[]>;
    };
}

const mockData = [
    {
        year: 2022,
        data: {
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
            DetailsTypeFinancing: {
                columns: [
                    "Тип финансирования",
                    "Плановое количество проектов",
                    "Одобренное количество проектов на ЭГ",
                ],
                rows: [
                    ["Базовая часть", "3", "2"],
                    ["Специальная часть", "9", "10"],
                ],
            },
        },
    },
    {
        year: 2023,
        data: {
            PlannedNumberProjects: 210,
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
            DetailsTypeFinancing: {
                columns: [
                    "Тип финансирования",
                    "Плановое количество проектов",
                    "Одобренное количество проектов на ЭГ",
                ],
                rows: [["Базовая часть", "3", "2"]],
            },
        },
    },
];

export default function Projects() {
    const [selectedYear, setSelectedYear] = useState(mockYears[0]);
    const x = mockData.find((el) => el.year === Number(selectedYear));
    //Дочинить типы
    const [data, setData] = useState<IdataSelectedYear>(
        x ? x.data : mockData[0].data
    );
    //Дочинить типы
    useEffect(() => {
        setData(x ? x.data : mockData[0].data);
    }, [selectedYear, x]);

    return (
        <div className={styles.container}>
            <CustomDropdown
                years={mockYears}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
            />
            <div className={styles.title}>
                Плановое количество проектов программы
                <span> - {data.PlannedNumberProjects}</span>
            </div>
            <div className={styles.title}>
                Одобренных проектов на ЭГ
                <span> - {data.ApprovedProjects}</span>
            </div>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Детализация по стратегическим проектам
                    </Accordion.Header>
                    <Accordion.Body>
                        <CustomGrid data={data.DetailsStrategicProjects} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Детализация по типу финансирования
                    </Accordion.Header>
                    <Accordion.Body>
                        <CustomGrid data={data.DetailsTypeFinancing} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className={styles.title}>
                Одобренных портфелей проектов на ЭГ
                <span> - {data.ApprovedProjectPortfolios}</span>
            </div>
            <Accordion flush>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        Детализация по стратегическим проектам
                    </Accordion.Header>
                    <Accordion.Body>
                        <CustomGrid data={data.DetailsStrategicProjects} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        Детализация по типу финансирования
                    </Accordion.Header>
                    <Accordion.Body>
                        <CustomGrid data={data.DetailsTypeFinancing} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className={styles.title}>
                Распределение проектов по типам к общему числу проектов{" "}
            </div>
            <CustomDropdown
                years={mockYears}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
            />
            <PieChartComponent />
        </div>
    );
}
