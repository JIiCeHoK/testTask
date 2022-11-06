import React from "react";
import { BarChart, Bar, XAxis, YAxis, Label, Tooltip, Legend } from "recharts";

const data = [
    {
        uv: 924193,
        pv: 892955,
        pv1: 745590,
        pv2: 637356,
        pv3: 600355,
        pv4: 589465,
    },
];

export default function StackedBarChartComponent() {
    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
        >
            <XAxis
                dataKey="name"
                label={{
                    value: "075-15-2021-1331 - Наука и университеты",
                    position: "outside",
                    textAnchor: "middle",
                }}
            />
            <YAxis >
                <Label
                    value="Pages of my website"
                    offset={0}
                    angle={-90}
                    position="center"
                />
            </YAxis>
            <Tooltip />
            <Legend />
            <Bar dataKey="pv4" stackId="a" fill="#0A0052" />
            <Bar dataKey="pv3" stackId="a" fill="#0A2A9A" />
            <Bar dataKey="pv2" stackId="a" fill="#305FFD" />
            <Bar dataKey="pv1" stackId="a" fill="#7585D1" />
            <Bar dataKey="pv" stackId="a" fill="#B3B9C8" />
            <Bar dataKey="uv" stackId="a" fill="#C2D0EE" />
        </BarChart>
    );
}
