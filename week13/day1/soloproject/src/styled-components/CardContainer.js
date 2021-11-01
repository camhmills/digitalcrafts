import styled from 'styled-components';

export const CardContainer = styled.div`
display: grid;
justify-content: center;
grid-template-columns: repeat(2, 252.5px);
grid-gap: 2.5px;
@media screen and (max-width: 520px) {
    grid-template-columns: 250px;
}
`

export const TitleDiv = styled.div`
grid-column: 1/3;
text-align: center;
`