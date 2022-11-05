import React, { useState } from "react";
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
    return (
        <div className={styles.container}>
            <CustomDropdown
                years={mockYears}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
            />
            <StackedBarChartComponent />
            <div className={styles.title}>Детализация</div>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>По соглашениям</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className={styles.title}>
                Одобренные средста в проектах определенного типа от общего
                бюджета
            </div>
            <BarChartComponent/>
        </div>
    );
}
