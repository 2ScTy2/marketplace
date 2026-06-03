
import * as S from './Search.styled'

export default function Search() {

    return (
        <S.Wrapper>
            <S.SearchIcon/>
            <S.Input 
                placeholder='Поиск'
            />
        </S.Wrapper>
    )

}