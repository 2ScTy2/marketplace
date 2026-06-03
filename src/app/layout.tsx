import { StoreProvider }from "@/stores/StoreProvider"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
            <body>
                <StoreProvider>
                    {children}
                </StoreProvider>
            </body>
        </html>
    )
}