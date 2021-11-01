import styled from 'styled-components';

export const CardContainer = styled.div`
display: grid;
justify-content: center;
align-items: start;
grid-template-columns: repeat(2, 252.5px);
grid-gap: 2.5px;
@media screen and (max-width: 720px) {
    grid-template-columns: 275px;
}
`

export const TitleDiv = styled.div`
grid-column: 1/3;
text-align: center;
height: 71px;
font-family: "Sweater-Stitch"
`