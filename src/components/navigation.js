import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";
import { Container }  from 'react-bootstrap';



const Navigation = () =>{
    return(

        <Nav>
            <Link to={'/'}>Incio</Link>
            <Link to={'/nosotros'}>Nostros</Link>
            {/* <Link></Link> */}
        </Nav>
    )



}


export default Navigation;

const Nav  = styled.nav`
`
