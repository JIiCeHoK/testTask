import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import styles from "../styles/componentStyles/Layout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header>
                <Header />
            </header>
            <main className={styles.container}>
                <SideMenu />
                {children}
            </main>
        </>
    );
}
