"use client"

import { createContext, useContext} from "react"

import { RootStore } from "./RootStore"

const store = new RootStore()

const StoreContext = createContext(store)

export const StoreProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <StoreContext.Provider
            value={store}
        >
            {children}
        </StoreContext.Provider>
    )
}

export const useStores = () => useContext(StoreContext)