import React, { useState } from "react";
import styles from "../styles/componentStyles/Navigation.module.scss";

interface Ititle {
    id: string;
    titleName: string;
}

export default function Navigation(props: {
    titles: Array<Ititle>;
    selectedElement: string;
    setSelectedElement: Function;
}) {
    return (
        <div className={styles.nav}>
            {props.titles.map((title: Ititle) => (
                <span
                    className={
                        props.selectedElement === title.id
                            ? styles.nav_active
                            : styles.nav_inactive
                    }
                    key={title.id}
                    onClick={() => {
                        props.setSelectedElement(title.id);
                    }}
                >
                    {title.titleName}
                </span>
            ))}
        </div>
    );
}
