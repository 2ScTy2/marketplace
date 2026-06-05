import styled from "styled-components";


export const Grid = styled.div `
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`