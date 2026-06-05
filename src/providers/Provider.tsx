"use client";

import { ThemeProvider } from "styled-components";

import { StoreProvider } from "@/providers/StoreProvider";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/global";

import Notification  from "@/features/notification/store/components/Notification"

export function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StoreProvider>
            <ThemeProvider theme={theme}>

                <GlobalStyle />
                
                <Notification/>

                {children}
            </ThemeProvider>
        </StoreProvider>
    );
}