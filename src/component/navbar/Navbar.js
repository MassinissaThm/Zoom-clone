import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'



export const Nav=styled.div`
width:100%;
height:150px;
background-color:#181818;
position:sticky;
top:0;
color:white;
`;


export const NavMenu=styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-22px;

@media screen and (max-width:768px){
    display:none;
}
`;



export const NavItem =styled.li`
height:80px;
`;

export const NavLinks=styled(LinkS)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;
&.active{
    border-bottom:3px solid #01bf71;
}
`