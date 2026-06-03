import styled from "styled-components";


export const Grid = styled.div `
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(
        auto-fit,
        minmax(250px, 1fr)
    );
`