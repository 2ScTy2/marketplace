import { motion } from 'framer-motion'
import { FiShoppingCart } from 'react-icons/fi'
import styled from 'styled-components'

export const CartWrapper = styled(motion.div)`
    position: relative;
    margin-right: 20px;
`

export const CartIcon = styled(FiShoppingCart)`
    color: ${({ theme }) => theme.colors.primary};
`

export const Count = styled(motion.div)`
    position: absolute;
    top: -7px;
    right: -8px;

    width: 14px;
    height: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    font-size: 8px;

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
`