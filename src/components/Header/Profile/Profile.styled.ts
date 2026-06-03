import { FiUser } from "react-icons/fi";
import styled from "styled-components";


export const ProfileIcon = styled(FiUser)`
    color :${({theme})=> theme.colors.primary};
    margin-right: 20px;
`