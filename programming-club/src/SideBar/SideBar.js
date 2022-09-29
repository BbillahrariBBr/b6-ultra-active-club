import React from 'react';
import SidebarContainerBottom from '../SidebarContainerBottom/SidebarContainerBottom';
import SideContainerMiddle from '../SideContainerMiddle/SideContainerMiddle';
import SideContainerTop from '../SideContainerTop/SideContainerTop';

const SideBar = () => {
    console.log();
    return (
        <div className='sticky top-0'>
            <SideContainerTop></SideContainerTop>
            <SideContainerMiddle></SideContainerMiddle>
            {/* <SidebarContainerBottom></SidebarContainerBottom> */}
        </div>
    );
};

export default SideBar;