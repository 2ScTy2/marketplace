
import { useStores } from '@/stores/StoreProvider'
import * as S from './Search.styled'
import { observer } from 'mobx-react-lite'

export default observer (function Search() {
    const {productsStore} = useStores()

    const handleChange = (
            e: React.ChangeEvent<HTMLInputElement>
        ) => {
        productsStore.setSearch(e.target.value)
    }
    return (
        <S.Wrapper>
            <S.SearchIcon/>
            <S.Input 
                placeholder='Поиск'
                onChange={handleChange}
                value={productsStore.search}
            />
        </S.Wrapper>
    )

})