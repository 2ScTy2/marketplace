import Cart from "./Cart/Cart";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";

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