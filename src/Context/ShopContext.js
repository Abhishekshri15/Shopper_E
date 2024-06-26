import React, { createContext, useContext, useState } from "react";
import all_product from "../Assets/all_product";
import "./ShopContext.css";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setcartItem] = useState(getDefaultCart());

  const AddtoCart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1}));
    console.log(cartItem);
  };
  const RemovefromCart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1}));
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItem){
      if(cartItem[item]>0)
      {
        let itemInfo = all_product.find((product)=>product.id===Number(item))
        totalAmount += itemInfo.new_price * cartItem[item];
      }
      
    }
    return totalAmount;
  }

  const getTotalCartIem = () =>{
    let totalItem = 0;
    for(const item in cartItem)
    {
      if (cartItem[item]>0)
      {
        totalItem+= cartItem[item];
      }
    }
    return totalItem;
  }

  const ContextValue = {getTotalCartIem, getTotalCartAmount, all_product, cartItem, AddtoCart, RemovefromCart };
  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
