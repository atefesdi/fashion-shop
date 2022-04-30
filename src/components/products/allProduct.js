import React, { useEffect, useState } from "react";
import styles from "./allProduct.module.css";
import Product from "./product";
import axios from "axios";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://fashion-shop-a4190-default-rtdb.firebaseio.com/product.json"
      )
      .then((res) => {
        const arrtemp = [];
        for (const key in res.data) {
          arrtemp.push({
            name: res.data[key].name,
            description: res.data[key].description,
            image: res.data[key].image,
            price: res.data[key].price,
            gender: res.data[key].gender,
            id:res.data[key].id,
          });
        }
        setProducts(arrtemp);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.allProduct}>
      <div className={styles.allProduct__container}>
        {products.map((item) => (
          <Product
            key={Math.random()}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
            gender={item.gender}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
export default AllProduct;
