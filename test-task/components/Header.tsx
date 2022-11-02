import React from "react";
import styles from "../styles/componentStyles/Header.module.scss";

export default function Header() {
    return (
        <>
            <div className={styles.container}>
                <h3 className={styles.title}>
                    Уральский федеральный университет
                </h3>
            </div>
        </>
    );
}
