import styled from "styled-components";

export const HeaderWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 2px solid #e2e8f0;
    position: sticky;
    top: 2px;
    z-index: 100;
    background: ${({theme}) => theme.colors.background};
`
export const Icons = styled.div `
    display: flex;
`