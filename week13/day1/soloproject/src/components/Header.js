import React from 'react'
import { HeaderDiv, SideBarButton } from '../styled-components/HeaderStyle'

export default function Header(props) {
    const viewsideBar = props.viewsideBar
    const setviewsideBar = props.setviewsideBar
    return (
        <HeaderDiv>
            <SideBarButton onClick = {() => setviewsideBar(!viewsideBar)}>Sidebar Toggle</SideBarButton>
        </HeaderDiv>
    )
}
