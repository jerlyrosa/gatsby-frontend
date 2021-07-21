import React  from "react";
import Header from "./header";
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
        </Helmet>
        <Header/>
        { children }
        </>
    )

}

export default Layout;


