import React from "react";

import styles from "../styles/componentStyles/CustomDropdown.module.scss";

export default function CustomDropdown(props: {
    years: number[];
    selectedYear: number;
    setSelectedYear: Function;
}) {
    return (
        <div>
            <div className={styles.label}>Период</div>
            <select
                value={props.selectedYear}
                className={styles.select}
                onChange={(event) => props.setSelectedYear(event.target.value)}
            >
                {props.years.map((year: number, index: number) => (
                    <option key={index} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
}
