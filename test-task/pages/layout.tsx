import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import styles from "../styles/componentStyles/Layout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className={styles.container}>
                <SideMenu />
                <div className={styles.container_content}>
                    <Header />
                    {children}
                </div>
            </main>
        </>
    );
}
