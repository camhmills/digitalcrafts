import styled from 'styled-components';

export const HomeDiv = styled.div`
display: grid;
grid-template-columns: repeat(3, 510px);
justify-content: space-evenly;
width: 100vw;
background-color: #e7eaf6;
overflow-y: scroll;
text-align: center;
@media screen and (max-width: 1814px) {
    grid-template-columns: 510px 510px;
}
@media screen and (max-width: 1120px) {
    grid-template-columns: 510px;
}
`