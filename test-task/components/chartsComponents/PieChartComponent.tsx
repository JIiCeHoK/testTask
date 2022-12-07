import React from "react";
import {
    PieChart,
    Pie,
    Label,
    Cell,
    Legend,
    ResponsiveContainer,
} from "recharts";

import styles from "../../styles/componentStyles/PieChartComponent.module.scss";

const data = [
    { name: "Научный", value: 103 },
    { name: "Организационный", value: 78 },
    { name: "Инфраструктурный", value: 43 },
    { name: "Образовательный", value: 32 },
    { name: "Предпринимательство и инновации", value: 24 },
    { name: "Социальный", value: 2 },
];
const COLORS = [
    "#0A0052",
    "#BEBEBE",
    "#7585D1",
    "#C2D0EE",
    "#7F7F7F",
    "#305FFD",
];

export default function PieChartComponent() {
    let sum: number = 0;
    let legend = [];

    data.forEach((elementData) => {
        sum += elementData.value;
        legend.push({ value: elementData.name, type: "line", id: "ID01" });
    });

    const label = "Всего проектов " + sum;

    const renderLegend = (props: any) => {
        const { payload } = props;
        return (
            <ul className={styles.legend_ul}>
                {payload.map((entry: any, index: any) => (
                    <li key={index} className={styles.legend_li}>
                        <div
                            className={styles.legend_marker}
                            style={{ backgroundColor: entry.color }}
                        ></div>
                        <b>{entry.payload.value}</b>
                        <b>шт</b>
                        <span>{entry.value}</span>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <PieChart width={500} height={400}>
            <Pie
                data={data}
                innerRadius={80}
                outerRadius={160}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                    />
                ))}

                <Label position="center" offset={0}>
                    {label}
                </Label>
            </Pie>
            <Legend
                content={renderLegend}
                verticalAlign="middle"
                wrapperStyle={{
                    top: 40,
                    right: -500,
                    lineHeight: "40px",
                    textAlign: "left",
                }}
            />
        </PieChart>
    );
}
