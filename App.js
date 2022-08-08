import React from 'react';
import Inventory from "./Inventory";
import Order from "./Order";
import Header from "./Header";
import fishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';
import PropTypes from 'prop-types';


class App extends React.Component {

static propTypes = {
  match: PropTypes.object,
}

    state = {
        fishes:{},
        order:{}
    }
   componentDidMount() {
       const {params} = this.props.match;
    this.ref = base.syncState(`${params.storeId}/fishes`,{
        context: this,
        state: 'fishes'
    });
   const localStorageRef = localStorage.getItem(params.storeId);
   if(localStorageRef) this.setState({order: JSON.parse(localStorageRef)})
 

   }

   componentDidUpdate(){
       console.log('updated', this.state.order);
       localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
   }

   componentWillUnmount() {
       base.removeBinding(this.ref);
   }
  
   inputFish = (key, inputFish) => {
  const fishes = {...this.state.fishes};
  fishes[key] = inputFish;
  this.setState({fishes});
   }
   
    upDateFish= (fish) =>{
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
       this.setState({fishes:fishes});
    }
     
    inputFish = (key,inputFish) =>{
        const fishes = {...this.state.fishes};
        fishes[key] = inputFish;
        this.setState({fishes});
    }
  deleteFish = (key) => {
      const fishes = {...this.state.fishes};
      fishes[key] = null;
      this.setState({fishes});
  }

     loadFishSamples = () => {
         this.setState({fishes:fishes});
     }
    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order});
    }

    removeOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({order});
    }
    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                <Header   tagline="Fresh Seafood Market" />
                <ul className="fishes" >
    {Object.keys(this.state.fishes).map( key => <Fish key={key} index={key}  details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
                </ul>
                </div>
                    <Order  order={this.state.order} fishes={this.state.fishes} removeOrder={this.removeOrder}/>
                    <Inventory upDateFish={this.upDateFish} loadFishSamples={this.loadFishSamples} fish={this.state.fishes} inputFish={this.inputFish} deleteFish={this.deleteFish}/>

         
            </div> 
        )
    }
}
 

export default App;


  
 