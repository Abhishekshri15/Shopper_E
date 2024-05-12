import React, { useContext } from 'react';
import '../Pages/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Assets/dropdown_icon.png';
import new_collections from '../Assets/new_collections';
import all_product from '../Assets/all_product';
import Item from '../Item/Item';



const ShopCategory = (props) => {
  // const {all_product} = useContext(ShopContext);/
 
  return (
    <div className='shop-category'>
    <img className='shopcategory-banner' src={props.banner}/>
    <div className='ShopCategory-indexsort'>
      <p>
        <span>Showing 1-12</span> out of 36 products
      </p>
      <div className='shopcategory-sort'>
        sort by <img src={dropdown_icon}/>
      </div>
    </div>
    <div className='shopcategory-product'>
      {all_product.map((item,i)=>{
        if(props.category === item.category){
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
        
      })}
    </div>
    <div className='shopcategory-loadmore'>
      Explore More
    </div>
    </div>
  );
}

export default ShopCategory;
