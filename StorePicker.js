import React from 'react';
import { getFunName} from '../helpers';
import PropTypes from 'prop-types';
 
class StorePicker extends React.Component {
   static propTypes = {
history: PropTypes.object,
   }
    myInput = React.createRef(); 
    
    goToStore =(e)=>{
        e.preventDefault();
       console.log(this.myInput.current.value )
       this.props.history.push(`/store/${this.myInput.current.value}`);
    }
    render() {
       return (
           <React.Fragment>
               <form className="store-selector" onSubmit={this.goToStore}>
                   <h2>Please Enter A Store</h2>
                   <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={this.myInput}></input>
                   <button type="submit">Visit Store 👉</button>
               </form>
            </React.Fragment>
         
       )
     

    }
}

export default StorePicker; 
