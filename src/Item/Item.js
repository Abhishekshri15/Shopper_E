import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import Product from '../Pages/Product';



const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image}/></Link>
      <p>{props.name}</p>
      <div className='items-prices'>
        <div className='itme-price-new'>
             ${props.new_price}
        </div>
        <div className='itme-price-old'>
            ${props.old_price}
            </div>
      </div>
    </div>
  );
}

export default Item;
