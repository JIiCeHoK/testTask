import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Label,
} from "recharts";

const data = [
    {
        name: "Социальный 3 шт",
        млн: 150,
    },
    {
        name: "Организационный 4 шт ",
        млн: 80,
    },
    {
        name: " Научный 6 шт",
        млн: 50,
    },
    {
        name: "Образовательный 8 шт",
        млн: 120,
    },
    {
        name: "Предпринимательский 10 шт",
        млн: 70,
    },
    {
        name: "Инфраструктурный 12 шт",
        млн: 90,
    },
];

export default function BarChartComponent() {
    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barCategoryGap="20%"
                    maxBarSize={40}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="8" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis
                        label={{
                            value: "Бюджет, млн. руб",
                            angle: -90,
                            position: "inside",
                            textAnchor: "middle",
                        }}
                    />
                    <Tooltip />
                    <Bar dataKey="млн" stackId="a" fill="#305FFD" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
