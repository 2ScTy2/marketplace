
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

export const Wrapper = styled.div`
    background: #f8fafc;
    width: 40%;
    position: relative;
    padding: 5px 20px;
    border-radius: 10px;
    border: 1px solid;
    border-color: ${({theme})=> theme.colors.primary};
`

export const Input = styled.input`
    background: none;
    border: none;
    width: 100%;
    outline: none;

    &::placeholder{
        color: ${({theme})=> theme.colors.primary};
    }
`
export const SearchIcon = styled(FiSearch)`
    position: absolute;
    top: 6px;
    right: 20px;
    color: ${({theme})=> theme.colors.primary};
`