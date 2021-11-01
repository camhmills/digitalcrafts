import styled from 'styled-components';

export const HeaderDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 100px;
background-color: #113f67;
`

export const HeaderTitle = styled.div`
font-family: Sweater-Stitch;
font-size: 65px;
color: #E7EAF6;
@media screen and (max-width: 770px) {
    font-size: 40px;
}
@media screen and (max-width: 560px) {
    font-size: 25px;
}
`

export const SideBarButton = styled.button`
height: 40px;
width: 100px;
border: none;
margin-left: 40px;
background-color: #a2a8d3;
transition: .3s;
&:hover {
    transform: scale(1.1);
    background-color: #b2b9eb;
}
@media screen and (max-width: 470px) {
    height: 30px;
    width: 75px;
    font-size: 75%;
    margin-left: 10px;
}
`

export const CartButton = styled.button`
height: 40px;
width: 100px;
border: none;
margin-right: 40px;
background-color: #a2a8d3;
transition: .3s;
&:hover {
    transform: scale(1.1);
    background-color: #b2b9eb;
}
@media screen and (max-width: 470px) {
    height: 30px;
    width: 75px;
    font-size: 75%;
    margin-right: 10px;
}
`