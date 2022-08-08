import React from 'react';
import PropTypes from 'prop-types';


 class AddFishForm extends React.Component{
        
     static propTypes ={
         addFish: PropTypes.func,
     }
        nameRef = React.createRef();
        priceRef = React.createRef();
        statusRef = React.createRef();
        descRef = React.createRef();
        imageRef = React.createRef();

        /* constructor(){
            super();
            this.addFish = this.addFish.bind(this);
        }  */

        addFish =(e)=> {
            e.preventDefault();
            const fish ={
                name:this.nameRef.current.value,
                price:parseFloat(this.priceRef.current.value),
                status:this.statusRef.current.value,
                desc: this.descRef.current.value,
                image: this.imageRef.current.value,
            };
           this.props.upDateFish(fish);
            e.currentTarget.reset();
  }
    render(){
   return (
       <form className='fish-edit' onSubmit={this.addFish}>
<input name="name" type="text" placeholder='name' ref={this.nameRef}/>
<input name="price" type="text" placeholder='price' ref={this.priceRef}/>
<select name="status" ref={this.statusRef}> 
<option name='available'>Fresh!</option>
<option name='unavailable'>Sold Out</option>
</select>
<textarea name="desc" type="text" ref={this.descRef} />
<input name="image"  placeholder='image' ref={this.imageRef}/>
<button type='submit'>Add Fish</button>
       </form>
   )
    }

 }
 

 export default AddFishForm; 
 