import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";


export const CartWrapper = styled.div`
    margin-right: 20px;
    position: relative;

`

export const CartIcon = styled(FiShoppingCart)`
    color: ${({theme})=> theme.colors.primary};
`
export const Count = styled.div`
    font-size: 8px;
    position: absolute;
    top: -7px;
    right:-8px;
    background: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.background};
    border-radius: 50%;
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
`
