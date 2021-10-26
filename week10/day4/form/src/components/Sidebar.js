import React from 'react';
import { SidebarDiv } from './styledcomponents/SidebarStyle';
import { sidebardata } from './SidebarLinks'
import { SideBarLinkDiv } from './styledcomponents/SideBarLinkStyle'
import { SideBarA } from './styledcomponents/SideBarLinkA';

export default function Sidebar(props) {
    const viewSidebar = props.viewSidebar;
    return (
        <div>
        { viewSidebar ? (
            <SidebarDiv>
            {sidebardata.map((tab, index) => (
                <SideBarLinkDiv><SideBarA href={tab.path}>{tab.name}</SideBarA></SideBarLinkDiv>
            ))}
            </SidebarDiv> ) : (<div></div>)
        }  
        </div> 
    )
}

