import React from "react";

import styles from "../styles/componentStyles/CustomDropdown.module.scss";

export default function CustomDropdown() {
    return (
        <div>
            <div className={styles.label}>Период</div>
            <select className={styles.select}>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
    );
}
