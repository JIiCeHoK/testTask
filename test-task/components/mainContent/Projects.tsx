import React, { useEffect, useState } from "react";
import PieChartComponent from "../chartsComponents/PieChartComponent";
import CustomDropdown from "../CustomDropdown";
import AccordionComponent from "../AccordionComponent";

import styles from "../../styles/componentStyles/Projects.module.scss";

type Ttypes = "accordion" | "title";

interface IdataSelectedYear {
    PlannedNumberProjects: {
        type: Ttypes;
        header: string;
        value: number;
    };
    ApprovedProjects: {
        type: Ttypes;
        header: string;
        value: number;
    };
    ApprovedProjectPortfolios: {
        type: Ttypes;
        header: string;
        value: number;
    };
    DetailsStrategicProjects: {
        type: Ttypes;
        header: string;
        data: {
            columns: string[];
            rows: Array<string[]>;
        };
    };
    DetailsTypeFinancing: {
        type: Ttypes;
        header: string;
        data: {
            columns: string[];
            rows: Array<string[]>;
        };
    };
}

const mockYears = [2022, 2023];

const mockData = [
    {
        year: 2022,
        data: {
            PlannedNumberProjects: {
                type: "title",
                header: "Плановое количество проектов программы",
                value: 212,
            },
            ApprovedProjects: {
                type: "title",
                header: "Одобренных проектов на ЭГ",
                value: 118,
            },
            DetailsStrategicProjects: {
                type: "accordion",
                header: " Детализация по стратегическим проектам",
                data: {
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
                        [
                            "3.",
                            "Благополучие человека в условиях цифровой трансформации",
                            "12",
                            "11",
                        ],
                        [
                            "3.",
                            "Благополучие человека в условиях цифровой трансформации",
                            "12",
                            "11",
                        ],
                    ],
                },
            },
            DetailsTypeFinancing: {
                type: "accordion",
                header: "Детализация по типу финансирования",
                data: {
                    columns: [
                        "Тип финансирования",
                        "Плановое количество проектов",
                        "Одобренное количество проектов на ЭГ",
                    ],
                    rows: [["Базовая часть", "3", "2"]],
                },
            },
            ApprovedProjectPortfolios: {
                type: "title",
                header: "Одобренных портфелей проектов на ЭГ",
                value: 97,
            },
            DetailsTypeFinancing2: {
                type: "accordion",
                header: "Детализация по типу финансирования",
                data: {
                    columns: [
                        "Тип финансирования",
                        "Плановое количество проектов",
                        "Одобренное количество проектов на ЭГ",
                    ],
                    rows: [["Базовая часть", "3", "2"]],
                },
            },
            DetailsTypeFinancing3: {
                type: "accordion",
                header: "Детализация по типу финансирования",
                data: {
                    columns: [
                        "Тип финансирования",
                        "Плановое количество проектов",
                        "Одобренное количество проектов на ЭГ",
                    ],
                    rows: [["Базовая часть", "3", "2"]],
                },
            },
        },
    },

    {
        year: 2023,
        data: {
            PlannedNumberProjects: {
                type: "title",
                header: "Плановое количество проектов программы",
                value: 2023,
            },
            ApprovedProjects: {
                type: "title",
                header: "Одобренных проектов на ЭГ",
                value: 118,
            },
            DetailsStrategicProjects: {
                type: "accordion",
                header: " Детализация по стратегическим проектам",
                data: {
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
                    ],
                },
            },
            DetailsTypeFinancing: {
                type: "accordion",
                header: "Детализация по типу финансирования",
                data: {
                    columns: [
                        "Тип финансирования",
                        "Плановое количество проектов",
                        "Одобренное количество проектов на ЭГ",
                    ],
                    rows: [["Базовая часть", "3", "2"]],
                },
            },
            ApprovedProjectPortfolios: {
                type: "title",
                header: "Одобренных портфелей проектов на ЭГ",
                value: 97,
            },
            DetailsTypeFinancing2: {
                type: "accordion",
                header: "Детализация по типу финансирования",
                data: {
                    columns: [
                        "Тип финансирования",
                        "Плановое количество проектов",
                        "Одобренное количество проектов на ЭГ",
                    ],
                    rows: [["Базовая часть", "3", "2"]],
                },
            },
            DetailsTypeFinancing3: {
                type: "accordion",
                header: "Детализация по типу финансирования",
                data: {
                    columns: [
                        "Тип финансирования",
                        "Плановое количество проектов",
                        "Одобренное количество проектов на ЭГ",
                    ],
                    rows: [["Базовая часть", "3", "2"]],
                },
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

            {Object.keys(data).map((element) => (
                <>
                    {(() => {
                        switch (data[element].type) {
                            case "title":
                                return (
                                    <div className={styles.title}>
                                        {data[element].header}
                                        <span>- {data[element].value}</span>
                                    </div>
                                );
                            case "accordion":
                                return (
                                    <AccordionComponent
                                        header={data[element].header}
                                        data={data[element].data}
                                    />
                                );
                        }
                    })()}
                </>
            ))}
            <div className={styles.title}>
                Распределение проектов по типам к общему числу проектов
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
