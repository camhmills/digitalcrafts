import React from 'react'
import { CartButton, HeaderDiv, HeaderTitle, SideBarButton } from '../styled-components/HeaderStyle'
import { Link } from 'react-router-dom'

export default function Header(props) {
    const viewsideBar = props.viewsideBar
    const setviewsideBar = props.setviewsideBar
    return (
        <HeaderDiv>
            <SideBarButton onClick = {() => setviewsideBar(!viewsideBar)}>Sidebar</SideBarButton>
            <HeaderTitle>Yarning Desire</HeaderTitle>
            <CartButton><Link to="/cart" style={{textDecoration: "none", color: "black"}}>Cart</Link></CartButton>
        </HeaderDiv>
    )
}
