import styled from 'styled-components';

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-text: center;
height: 350px;
width: 250px;
background-color: white;
@media screen and (max-width: 720px) {
    width: 275px;
    height: 375px;
    margin-bottom: 20px;
}
`

export const CardButtonDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

export const Cardbutton = styled.button`
border: none;
background-color: #e7eaf6;
transition: .25s;
&:hover{
    background-color: #38598B;
    color: #E7EAF6;
}
&:active {
    transform: scale(.95)
}
@media screen and (max-width: 810px) {
    &:active {
        background-color: #5179b4;
    }
}
`