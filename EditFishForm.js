import React from 'react'; 
import PropTypes from 'prop-types';
 
 
 

class EditFishForm extends React.Component {
     static propTypes = {
        fish:PropTypes.shape({
            image: PropTypes.string,
            desc: PropTypes.string,
            status:PropTypes.string,
            price:PropTypes.number,
        }),
        index:PropTypes.string,
        inputFish: PropTypes.func,
     }
    handelChange = (e) => {
        console.log(e.currentTarget.name, e.currentTarget.value);
        const fish = {
            ...this.props.fish,
            [e.currentTarget.name]:e.currentTarget.value,
        }
        this.props.inputFish(this.props.index,fish);
    }
    
    render() {

        return (
        <div className='fish-edit'>
     <input name="name" type="text" placeholder='name' onChange={this.handelChange} value={this.props.fish.name} />
<input name="price" type="text" placeholder='price' onChange={this.handelChange} value={this.props.fish.price}  />
<select name="status" onChange={this.handelChange} value={this.props.fish.status}  > 
<option name='available'>Fresh!</option>
<option name='unavailable'>Sold Out</option>
</select>
<textarea name="desc" type="text" value={this.props.fish.desc} onChange={this.handelChange} />
<input name="image"  placeholder='image' value={this.props.fish.image}  onChange={this.handelChange} />
<button onClick={()=>this.props.deleteFish(this.props.index)}>Delete Items</button>
           
        </div>
        )
    }
}

export default EditFishForm;
