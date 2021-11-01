import React from 'react'
import { SideBarDiv, SideBarLink } from '../styled-components/SideBarStyle'
import { sideBarLinks } from './SidebarLinks'

export default function Sidebar(props) {
    const viewsideBar = props.viewsideBar
    return (
        <>
            { viewsideBar ? (
            <SideBarDiv>
            {sideBarLinks.map(link => (
                <SideBarLink to={link.path}>{link.name}</SideBarLink>
            ))}
            </SideBarDiv>
            ) : (
            <></>
            )}

        </>
    )
}
