import React from "react";
import styles from "./productDetails.module.css"
import { CgClose } from "react-icons/cg";
import {useDispatch, useSelector} from 'react-redux';
import {cartActions} from "../../store/cart-reducer"

const PoroductDetails =(props)=>{
    const { name, description, price, image, gender ,id } = props;
    const dispatch = useDispatch();
    

    const addProductHandler = ()=>{
        const payload={
            name:name,
            price:price,
            image:image,
            gender:gender,
            quantity: 0,
            id: id,
        }
        dispatch(cartActions.addtoCart(payload))
    }
    const closeDetailPage = ()=>{
        props.closePage(false);

    }
    return(
        <div className={styles.product__container}>
            <CgClose onClick={closeDetailPage} className={styles.closeIcon} />
            <div className={styles.innerProduct__container}>
                    <img src={image}   />
                    <div >
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <h3>gender: {gender}</h3>
                        <h3>price: {price}</h3>
                        <button onClick={addProductHandler}>add to basket</button>
                    </div>
            </div>
            
        </div>
    )
}

export default PoroductDetails