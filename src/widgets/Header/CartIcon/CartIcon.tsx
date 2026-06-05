'use client'
import { observer } from 'mobx-react-lite'

import { useStores } from '@/providers/StoreProvider'
import * as S from './CartIcon.styled'

export default observer(function Cart() {
    const {cartStore} = useStores()
    let count = cartStore.items.length

    return(
        <S.CartWrapper>
            <S.CartIcon/>
            {count > 0 && (
                <S.Count>{count}</S.Count>
            )}
        </S.CartWrapper>
    )
})