import React from "react";

import styles from "../styles/componentStyles/CustomGrid.module.scss";

export default function CustomGrid(props: {
    data: { columns: string[]; rows: Array<string[]> };
}) {
    return (
        <>
            <table className={styles.container_table}>
                <tr>
                    {props.data.columns.map((column: string) => (
                        <th key={column} className={styles.td}>
                            {column}
                        </th>
                    ))}
                </tr>

                {props.data.rows.map((row: string[]) => (
                    <tr key={row[0]}>
                        {row.map((text: string) => (
                            <td key={text} className={styles.tr}>
                                {text}
                            </td>
                        ))}
                    </tr>
                ))}
            </table>
        </>
    );
}
