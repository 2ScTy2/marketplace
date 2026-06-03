import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";


export const CartIcon = styled(FiShoppingCart)`
    color: ${({theme})=> theme.colors.primary};
    margin-right: 20px;
`