import React from "react";

import styles from "../styles/componentStyles/CustomGrid.module.scss";

export default function CustomGrid(props: {
    data: { columns: string[]; rows: Array<string[]> };
}) {
    return (
        <>
            <div className={styles.container_columns}>
                {props.data.columns.map((column: string) => (
                    <div key={column}>{column}</div>
                ))}
            </div>

            {props.data.rows.map((row: string[]) => (
                <div key={row[0]} className={styles.container_row}>
                    {row.map((text: string) => (
                        <div key={text}>{text}</div>
                    ))}
                </div>
            ))}
        </>
    );
}
