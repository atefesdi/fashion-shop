import React, { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from "./product.module.css";
import PoroductDetails from "./productDetails";

const Product = (props) => {
  const { name, description, price, image, gender , id} = props;


  const [detaiPage, setDetailPage] = useState(false);

  const detailPageHandler = () => {
    setDetailPage(true);
  };

  return (
    <div className={styles.productStyle}>
      <img src={image} />
      <span>men's shoes</span>
      <h1>{name}</h1>
      {/* <p>{description}</p> */}
      <div className={styles.addtobasket__style}>
        <div className={styles.price__container}>
          <h3>price: {price}</h3>
          <BiDollar />
        </div>
        <button onClick={detailPageHandler}>show detailes</button>
      </div>

      {detaiPage && (
        <PoroductDetails
          name={name}
          image={image}
          gender={gender}
          price={price}
          description={description}
          id={id}
          closePage={setDetailPage}
        />
      )}
    </div>
  );
};
export default Product;
