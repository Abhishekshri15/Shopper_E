import React, { useContext, useState } from 'react';
import './Nevbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';


export default function Navbar() {

  
  const [menu, setMenu]= useState ("shop"); 
  const {getTotalCartIem}= useContext(ShopContext);
  return (
    <div className='Navbar'>
      <div className='Nav-logo'>
      <img src={logo}/>
       <p>Shopper_E</p>
      </div>
      <ul className='Nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to={'/'}>Shop</Link>{menu=== "shop"? <hr/> :<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to={'/mens'}>Mens</Link>{menu=== "mens"? <hr/> :<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to={'/womens'}>Womens</Link>{menu=== "womens"? <hr/> :<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to={'/kids'}>Kids</Link>{menu=== "kids"? <hr/> :<></>}</li>
      </ul>
      <div className='Nav-login-cart'>
        <Link to={'/login'}><button>Login</button></Link>
        <Link to={'/cart'}><img src={cart}/></Link>
        <div className='Nav-cart-count'>{getTotalCartIem()}</div>
      </div>
    </div>
  );
}
