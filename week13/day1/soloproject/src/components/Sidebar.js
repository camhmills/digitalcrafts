import React from 'react'
import { SideBarDiv, SideBarA } from '../styled-components/SideBarStyle'
import { sideBarLinks } from './SidebarLinks'

export default function Sidebar(props) {
    const viewsideBar = props.viewsideBar
    return (
        <>
            { viewsideBar ? (
            <SideBarDiv>
            {sideBarLinks.map(link => (
            <SideBarA href = {link.path}>{link.name}</SideBarA>
            ))}
            </SideBarDiv>
            ) : (
            <></>
            )}

        </>
    )
}
