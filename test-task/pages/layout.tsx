export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <header>Слой работает</header>
                <aside>Что-то тут</aside>
                <main>{children}</main>
            </body>
        </html>
    );
}
