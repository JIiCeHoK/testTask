import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Социальный 3 шт",
        uv: 150,
    },
    {
        name: "Организационный 4 шт ",
        uv: 80,
    },
    {
        name: " Научный 6 шт",
        uv: 50,
    },
    {
        name: "Образовательный 8 шт",
        uv: 120,
    },
    {
        name: "Предпринимательский 10 шт",
        uv: 70,
    },
    {
        name: "Инфраструктурный 12 шт",
        uv: 90,
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
                    <CartesianGrid strokeDasharray="4 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Bar dataKey="uv" stackId="a" fill="#305FFD" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
