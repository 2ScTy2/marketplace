'use client'

import * as S from './Container.styled'

type ContainerProps = {
    children: React.ReactNode
}

export default function Container({children}: ContainerProps) {
    return (
        <S.Wrapper>
            { children }
        </S.Wrapper>
    )
}