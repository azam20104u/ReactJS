import React from "react";
import Product from "./Product"

export default function ProductList(props) {
  console.log(props);
  return (props.prodList.map((product,i)=>{
    return <Product product={product} key={i}></Product>
  }));
}
