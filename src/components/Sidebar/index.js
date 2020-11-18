import React from 'react'


const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>

            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>


            <SidebarBtnWrap>
            <SidebarRoute to="/">Order Now</SidebarRoute>
            </SidebarBtnWrap>

        </SidebarContainer>
    )
}

export default Sidebar 
