import React  from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";
import Navigation from './navigation';



const HeaderComponent = ( )=> {
    return(
        <Header>
            <StylesContainer>
                        <Link to='/'>
                            Logo
                        </Link> 
                        <Navigation/>
            </StylesContainer>

     
        </Header>
        )
}

export default HeaderComponent;

const Header = styled.header`
    text-decoration: none;
    background-color:#0D283B;
`;

const StylesContainer = styled.div`
    padding: 1rem;
    max-width: 120rem;
    margin: 0 auto;
    text-align:center;
    @media (min-width:768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        ;

    }

`;



