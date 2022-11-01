import React from "react";
import styles from "../styles/componentStyles/SideMenu.module.scss";

export default function SideMenu() {
    return (
        <div className={styles.container}>
            <div>
                <h3>О программе</h3>
                <h4>Ключевые индикаторы программы</h4>
            </div>
            <div>
                <h3>Новости</h3>
            </div>
            <div>
                <h3>Документы</h3>
            </div>
            <div>
                <h3>Управление бюджетом</h3>
                <h4>Отчёты по бюджету</h4>
            </div>
            <div>
                <h3>Стратегические проекты</h3>
            </div>
            <div>
                <h3>Показатели</h3>
            </div>
            <div>
                <h3>Политики развития</h3>
            </div>
            <div>
                <span>Консорциумы</span>
            </div>
        </div>
    );
}
