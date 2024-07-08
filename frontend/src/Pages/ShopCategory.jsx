import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import all_product from '../Components/Assets/all_product';

export const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
    
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>

    </div>
  )
}
