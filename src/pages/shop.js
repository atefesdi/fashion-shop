import React from "react";
import AllProduct from "../components/products/allProduct";
import styles from "./shop.module.css";

const Shop=()=>{

    return(
        <React.Fragment>
            <div className={styles.shopHeader__container} >
               <div>
               <h1>Stay At Home</h1>
                <p>Save more with UBISOFT and up to 70% off</p>
               </div>
            </div>
            <AllProduct/>
        </React.Fragment>
    )
}
export default Shop;