import React  from "react";
import HeaderComponent from "./header";
import { Helmet } from "react-helmet";
import 'normalize.css';//
import GlobalStyle from "./styles/global-styles";

const Layout  = ( { children } )=> {
    
    return (
        <>
        <GlobalStyle/>
        {/* Componenente para modifcar el head del sitio */}
        <Helmet>
            <title>Vikingos web</title>
            <meta name="description"  content="Sitio web en Gataby"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"/>
        </Helmet>
        <HeaderComponent/>
        { children }
        </>
    )

}

export default Layout;


