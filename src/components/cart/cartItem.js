import React from "react";
import { CgClose } from "react-icons/cg";
import {useDispatch, useSelector} from 'react-redux';
import { cartActions } from "../../store/cart-reducer";
import styles from "./cartItem.module.css"

const CartItem =(props)=>{

const {name , price , quantity, gender , image , id} = props;

const dispatch = useDispatch()

const removeHandler=()=>{
    dispatch(cartActions.removeFromCart(id));
}
    return(
        <div className={styles.items__container}>
            <CgClose onClick={removeHandler}  style={{fontSize:"20px" , cursor:"pointer"}} />
            <img src={image} /> 
            <h3>{name}</h3>
            <p>{price}</p>
            <h5>{quantity}</h5>
        </div>
    )
}
export default CartItem;