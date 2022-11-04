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

                {props.data.rows.map((row: string[]) => {
                    row.map((rowData: string) => (
                        <div key={rowData}>{rowData}</div>
                    ));
                })}
            </div>
        </>
    );
}
