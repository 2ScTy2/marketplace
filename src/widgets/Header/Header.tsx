'use client'

import Cart from "./CartIcon/CartIcon";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import Search from "../../features/search/components/Search/Search";

import * as S from './Header.styled'

export default function Header() {
    return(
        <S.HeaderWrap> 
            <Logo/>
            <Search/>
            <S.Icons>
                <Cart/>
                <Profile/>
            </S.Icons>
        </S.HeaderWrap>
    )
}