import React, {useState} from "react";

function DogItem({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const cartStatus = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove from Cart" : "Add to Cart";
  function handleClick(){
    setIsInCart(!isInCart)
  }
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={(e)=> handleClick()}>{buttonText}</button>
    </li>
  );
}

export default DogItem;
