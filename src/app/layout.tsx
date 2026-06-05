'use client'

import { Providers } from "@/providers/Provider";
import Container from "@/shared/ui/Container/Container";
import Header from "@/widgets/Header/Header";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body>
                <Container>
                    <Providers>
                        <Header/>
                        {children}
                    </Providers>
                </Container>
            </body>
        </html>
    );
}