import React from 'react'
import {Nav,NavMenu,NavItem,NavLinks} from './Navbar';
function Navbar() {
    return (
       <Nav >
           <NavMenu>
               <NavItem>
                   <NavLinks to='/'>test </NavLinks>
                   </NavItem>
               <NavItem>test</NavItem>
               <NavItem>test</NavItem>
               <NavItem>test</NavItem>
               <NavItem>test</NavItem>
               <NavItem>test</NavItem>
           </NavMenu>
       </Nav>
    )
}

export default Navbar
