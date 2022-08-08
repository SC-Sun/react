import React from "react";
import {formatPrice} from '../helpers';
import PropTypes from 'prop-types';

class Fish extends React.Component{
   static propTypes ={
       addToOrder:PropTypes.func, 
       details: PropTypes.shape({
          image: PropTypes.string,
          desc: PropTypes.string,
          status:PropTypes.string,
          price:PropTypes.number,

       })
       
   }
     
    render(){
        const {image,desc,name,price, status} =  this.props.details;
        const isAvailable = status === 'available';
        return (
            <li className='menu-fish'>
             <img src={image} alt={name}/> 
             <h3 className='fish-name'>{name} 
             <span className='price'>{formatPrice(price)}</span> 
             </h3>
             <p>{desc}</p>
             <button disabled={!isAvailable} onClick={()=>this.props.addToOrder(this.props.index)} >
                 {/* you can do this as well, handleOrder ()=> this.props.addToOrder(this.props.index) */} 
              {isAvailable? 'Add Order' : 'Sold Out'}
             </button>
            </li>
            
        )
    }
}

export default Fish;

 
 