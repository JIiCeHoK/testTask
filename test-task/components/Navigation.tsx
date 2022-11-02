import React from "react";
import styles from "../styles/componentStyles/Navigation.module.scss";

interface Ititle {
    id: string;
    titleName: string;
}

export default function Navigation(props: {
    titles: Array<Ititle>;
    setSelectedElement: Function;
}) {
    return (
        <div className={styles.nav}>
            {props.titles.map((title: Ititle) => (
                <span
                    key={title.id}
                    onClick={() => props.setSelectedElement(title.id)}
                >
                    {title.titleName}
                </span>
            ))}
        </div>
    );
}
