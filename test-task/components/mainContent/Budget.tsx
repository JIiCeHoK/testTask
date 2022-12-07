import React, { useEffect, useState } from "react";
import CustomDropdown from "../CustomDropdown";
import Accordion from "react-bootstrap/Accordion";
import StackedBarChartComponent from "../chartsComponents/StackedBarChartComponent";
import BarChartComponent from "../chartsComponents/BarChartComponent";

import styles from "../../styles/componentStyles/Budget.module.scss";

const mockYears = [2022, 2023];

const mockData = [
    {
        year: 2023,
        data: {
            budgetChart: {
                name: "Page A",
                uv: 4000,
                pv: 2400,
                amt: 2400,
            },
        },
    },
];

export default function Budget() {
    const [selectedYear, setSelectedYear] = useState(mockYears[0]);
    const x = mockData.find((el) => el.year === Number(selectedYear));
    //Дочинить типы
    const [data, setData] = useState(
        x ? x.data : mockData[0].data
    );
    //Дочинить типы
    useEffect(() => {
        setData(x ? x.data : mockData[0].data);
    }, [selectedYear, x]);
    return (
        <div className={styles.container}>
            <div className={styles.flex}>
                <CustomDropdown
                    years={mockYears}
                    selectedYear={selectedYear}
                    setSelectedYear={setSelectedYear}
                />
                <div className={styles.markerTitle}>
                    *Информация представлена по состоянию на 20.09.2022
                </div>
            </div>

            <StackedBarChartComponent />
            <div className={styles.title}>Детализация</div>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>По соглашениям</Accordion.Header>
                    <Accordion.Body>
                        <div className={styles.flex}>
                            <StackedBarChartComponent />
                            <StackedBarChartComponent />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className={styles.title}>
                Одобренные средста в проектах определенного типа от общего
                бюджета
            </div>
            <BarChartComponent />
        </div>
    );
}
