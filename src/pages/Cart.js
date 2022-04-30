import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/cart/cartItem";
import styles from "./Cart.module.css";

const Cart = () => {
  const items = useSelector((state) => state.items);
  const totalPrice = useSelector((state) => state.totalPrice);
  const totalQuantity = useSelector((state) => state.totalQuantity);

  const cartFlag = !!totalPrice
  
  return (
    <div className={styles.cart__container}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          image={item.image}
          gender={item.gender}
        />
      ))}

      {cartFlag &&<div className={styles.total__container}>
        <p>total price : {totalPrice}</p>
        <p>total quantity : {totalQuantity}</p>
        <button> submit </button>
      </div>}
      {
          !cartFlag && <h1> no item exist , please add it!</h1>
      }
    </div>
  );
};
export default Cart;
