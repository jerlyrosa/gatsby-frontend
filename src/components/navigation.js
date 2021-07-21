import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";

const Navigation = () =>{

    return(
        <Nav>
            <NavLink to={'/'}>Incio</NavLink>
            <NavLink to={'/nosotros'}>Nostros</NavLink>
        </Nav>
    )
}


export default Navigation;

const Nav  = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
    @media (min-width:768px) {
            padding: 0;
            flex-direction:row;
            ;
        }
`;

const NavLink = styled( Link )`
        color: #fff;
        font-weight: 700;
        text-decoration: none;
        padding: .5rem;
        margin-right: 1rem;
        &:last-of-type{
            margin-right: 0 ;
        }

`;
