import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarDiv = styled.div`
display: flex;
flex-direction: column;
align-items: start;
text-align: center;
height: auto;
max-width: 200px;
min-width: 180px;
background-color: #38598b;
@media screen and (max-width: 429px) {
    z-index: 2;
    position: absolute;
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