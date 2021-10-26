import styled from 'styled-components';

export const GridContainer = styled.div`
    flex-direction: row;
    display: flex;
    @media(max-width: 1400px) {
        display: block;
    }
`;

export const Input = styled.input`
    width: 1050px;

    @media(max-width: 280px) {
        width: 80vw;
    }
`;