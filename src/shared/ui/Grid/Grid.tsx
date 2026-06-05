
import * as S from './Grid.styled'

type GridProps = {
    children: React.ReactNode
}

export default function ProductGrid({children}: GridProps){
    return (
        <S.Grid>
            {children}
        </S.Grid>
    )
}