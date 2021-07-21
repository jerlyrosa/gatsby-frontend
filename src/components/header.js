import React  from 'react';
import { Link } from 'gatsby';
// import styled from "styled-components";
import { Container }  from 'react-bootstrap';
import Navigation from './navigation';


const Header = ( )=> {
    return(
        <Container>
            <Link to='/'>
                Logo
            </Link>
            <Navigation/>


            
        </Container>
        )
}

export default Header;

// const Container = styled.row``;

