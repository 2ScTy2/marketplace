'use client'

import { observer } from "mobx-react-lite";

import * as S from './Notification.styled'
import { useStores } from "@/providers/StoreProvider";
import { AnimatePresence } from "framer-motion";

export default observer(function Notification() {
    const {notificationStore} = useStores()


    return (
        <AnimatePresence>
            {notificationStore.isOpen && (
                <S.NotificationWrapper
                    initial = {{
                        opacity: 0,
                        y: -20
                    }}
                    animate = {{
                        opacity: 1,
                        y: 0
                    }}
                    exit={{
                        opacity: 0,
                        y: -20
                    }}
                >
                    {notificationStore.message}
                    <S.CloseButton
                        onClick={() => {
                            notificationStore.hide()
                        }}
                    >
                    <   S.CloseIcon/>
                    </S.CloseButton>
                </S.NotificationWrapper>
            )}
        </AnimatePresence>
    )
})