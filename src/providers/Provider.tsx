"use client";

import { ThemeProvider } from "styled-components";

import { StoreProvider } from "@/providers/StoreProvider";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/global";

export function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </StoreProvider>
    );
}