import React from "react";

import styles from "../styles/componentStyles/CustomGrid.module.scss";

export default function CustomGrid(props: {
    data: { columns: string[]; rows: Array<string[]> };
}) {
    return (
        <>
            <table className={styles.container_table}>
                <tr>
                    {props.data.columns.map((column: string, index: number) => (
                        <th key={index} className={styles.td}>
                            {column}
                        </th>
                    ))}
                </tr>

                {props.data.rows.map((row: string[], index: number) => (
                    <tr key={index}>
                        {row.map((text: string,index: number) => (
                            <td key={index} className={styles.tr}>
                                {text}
                            </td>
                        ))}
                    </tr>
                ))}
            </table>
        </>
    );
}
