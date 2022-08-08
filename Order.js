import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {formatPrice} from '../helpers';
import PropTypes from 'prop-types';


class Order extends React.Component{
    static propTypes ={
        fish: PropTypes.object,
        order: PropTypes.object,
        removeOrder: PropTypes.func,

    }
 
    renderOrder = (key) =>{
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable =  fish && fish.status === 'available';
        const transitionOptions = {
            timeout: {enter:500,exit:500},
            classNames:'order',
           key, 
        }
       if(!fish) return null;
        if(isAvailable) { 
         return  (  
         <CSSTransition   {...transitionOptions}> 
         <li  key={key}>
         <span>
         <TransitionGroup component='span' className='count'> 
            <CSSTransition classNames='count' key={count} timeout={{enter:500, exit:500}}> 
             <span>{count}</span> 
             </CSSTransition>
             </TransitionGroup>
             lbs {fish.name} {formatPrice(fish.price)} 
             <button onClick={()=>this.props.removeOrder(key)}>&times;</button>  
             </span>
         </li> 
         </CSSTransition>
       )
        }
  return ( 
            <CSSTransition {...transitionOptions}> 
            <li key={key} >
                Sorry {fish.status? fish.name : 'fish'} is sold out.
                </li> 
            </CSSTransition>
        )

        
    }

    render() {
      
 const orderId = Object.keys(this.props.order);
 const total = orderId.reduce( (prevTotal, key) => {
     const fish = this.props.fishes[key];
     const count = this.props.order[key];
     const isAvailable = fish && fish.status === 'available';
      
     if( isAvailable) return prevTotal + count * fish.price;
     else return prevTotal;
 },0);

        return (
     <div className='order-wrap'>
        <TransitionGroup   component='ul' className="order">
            {orderId.map(this.renderOrder)}
            </TransitionGroup>
        <div className='total'>
        total: 
        {formatPrice(total)}
        </div>
     </div>
        );

    }
}

export default Order;

{/* className Ul = "order" */}

 