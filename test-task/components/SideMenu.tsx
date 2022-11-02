import React from "react";
import styles from "../styles/componentStyles/SideMenu.module.scss";

export default function SideMenu() {
    return (
        <div className={styles.container}>
            <div>
                <span className={styles.h3}>О программе</span>
                <span className={styles.h4}>Ключевые индикаторы программы</span>
            </div>
            <div>
                <span className={styles.h3}>Новости</span>
            </div>
            <div>
                <span className={styles.h3}>Документы</span>
            </div>
            <div>
                <span className={styles.h3}>Управление бюджетом</span>
                <span className={styles.h4}>Отчёты по бюджету</span>
            </div>
            <div>
                <span className={styles.h3}>Стратегические проекты</span>
            </div>
            <div>
                <span className={styles.h3}>Показатели</span>
            </div>
            <div>
                <span className={styles.h3}>Политики развития</span>
            </div>
            <div>
                <span className={styles.h3}>Консорциумы</span>
            </div>
        </div>
    );
}
