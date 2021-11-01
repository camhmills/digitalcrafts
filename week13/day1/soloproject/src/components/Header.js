import React from 'react'
import { CartButton, HeaderDiv, HeaderTitle, SideBarButton } from '../styled-components/HeaderStyle'

export default function Header(props) {
    const viewsideBar = props.viewsideBar
    const setviewsideBar = props.setviewsideBar
    return (
        <HeaderDiv>
            <SideBarButton onClick = {() => setviewsideBar(!viewsideBar)}>Sidebar</SideBarButton>
            <HeaderTitle>Yarning Desire</HeaderTitle>
            <CartButton>Cart</CartButton>
        </HeaderDiv>
    )
}
