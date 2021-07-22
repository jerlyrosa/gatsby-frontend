import React  from 'react';
import { Link, useStaticQuery,graphql } from 'gatsby';
import styled from "styled-components";
import Navigation from './navigation';


const HeaderComponent = ( )=> {

    //Peticion del logo.svg
    const {logo} = useStaticQuery(graphql`
            query{
                logo: file(relativePath: {eq: "logo.svg"}) {
                publicURL
                }
            }
      
    
    `);


    return(
        <Header>
            <StylesContainer>
                        <Link to='/'>
                            <img src={logo.publicURL} alt="Logotipo" height="70px" />
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



