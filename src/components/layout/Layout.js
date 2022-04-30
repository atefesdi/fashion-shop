import React from "react";
import Footer from "./footer"
import MainNavigation from "./mainNavigation"

const Layout = (props)=>{

    return(
        <React.Fragment>
            <MainNavigation />
            <main>{props.children}</main>
            <Footer/>
        </React.Fragment>
    )

}
export default Layout;