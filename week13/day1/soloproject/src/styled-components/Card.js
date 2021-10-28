import styled from 'styled-components';

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-text: center;
height: 300px;
width: 200px;
background-color: white;
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
`