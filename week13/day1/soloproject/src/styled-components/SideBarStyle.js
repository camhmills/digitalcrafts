import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarDiv = styled.div`
display: flex;
flex-direction: column;
align-items: start;
text-align: center;
height: auto;
background-color: #38598b;
@media screen and (max-width: 700px) {
    z-index: 2;
    position: absolute;
    width: 100vw;
}
transition: left 0.5s ease 0s;
animation-name: fadeInOut;
width: 230px;
animation-duration: 0.5s;
animation-fill-mode: both;
@keyframes fadeInOut {
  from {
    opacity: 0;
    padding: 0;
    margin: 0;
    max-height: 0;
    transform: translate(100, 510px);
  }
  to {
    opacity: .95;
  }
}
`

export const SideBarLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
width: 100%;
text-decoration: none;
color: #e7eaf6;
transition: .75s;
&:hover {
    background-color: #5179b4; 
}
@media screen and (max-width: 810px) {
    &:active {
        background-color: #5179b4;
    }
}
`