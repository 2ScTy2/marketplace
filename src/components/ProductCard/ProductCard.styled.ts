import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    border-radius: 20px;
`

export const ImgWrap = styled.div`
    position: relative;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
`
export const Image = styled.img` 
    width: 100%;
`
export const Button = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
`
export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
    margin:20px 0 10px 20px;
    font-size: 24px;
`

export const Text = styled.p` 
    color: ${({theme}) => theme.colors.text};
    margin:20px 0 20px 20px;
`
export const CartButton = styled.button`
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: ${({theme}) => theme.colors.primary};
    padding: 10px 10px 5px;
    border-radius: 50%;
`
export const CartIcon = styled(FiShoppingCart)`
    color: #f5f7fb;
`
