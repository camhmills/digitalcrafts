import styled from 'styled-components'

export const SideBarDiv = styled.div`
display: flex;
flex-direction: column;
align-items: start;
text-align: center;
height: auto;
max-width: 200px;
min-width: 180px;
background-color: #38598b;
transition: 1s;
`

export const SideBarA = styled.a`
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
`