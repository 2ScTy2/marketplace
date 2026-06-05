'use client'

import { observer } from 'mobx-react-lite'
import { AnimatePresence, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

import { useStores } from '@/providers/StoreProvider'
import * as S from './CartIcon.styled'

export default observer(function Cart() {
    const { cartStore } = useStores()

    const count = cartStore.totalQuantity
    const controls = useAnimation()
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        controls.start({
            scale: [1, 1.2, 1],
            transition: {
                duration: 0.3,
            },
        })
    }, [count, controls])

    return (
        <S.CartWrapper animate={controls}>
            <S.CartIcon />

            <AnimatePresence>
                {count > 0 && (
                    <S.Count
                        key="cart-count"
                        initial={{
                            scale: 0,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        exit={{
                            scale: 0,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                    >
                        {count}
                    </S.Count>
                )}
            </AnimatePresence>
        </S.CartWrapper>
    )
})