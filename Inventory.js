import React from 'react';
import firebase from 'firebase';
 import PropTypes from 'prop-types';
 import Login from './Login';
 import base,{firebaseApp} from '../base';
 import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
 

class Inventory extends React.Component {
 
    static propTypes = {
        fish: PropTypes.object,
        upDateFish: PropTypes.func,
        inputFish: PropTypes.func,
        upDateFish: PropTypes.func,
        loadFishSamples:PropTypes.func,
        deleteFish:PropTypes.func,
    }

    state = {
        uid: null,
        owner: null

    };

  /*      componentDidMount () {
        firebase.auth().onAuthStateChanged( user => {
            if(user) {
                this.authHandler({user});
            }
        })
    } */
  
    authHandler = async authData => {
       const store = await base.fetch( this.props.storeId,{context:this});
       if(!store.owner) {
           await base.post(`${this.props.storeId}/owner`,{
               data: authData.user.uid,
           });
           
           this.setState({
               uid: authData.user.uid,
               owner: store.owner || authData.user.uid,
           });      
       }; console.log(authData,store);
    }
    authenticate = provider => { 
     const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
    .auth()
    .signInWithPopup(authProvider)
    .then(this.authHandler); 
    } 

    logOut = async ()=> {
        console.log('logging out')
        await firebase.auth().signOut();
        this.setState({uid: null});
    }
 
    render() {
        const logOut = <button onClick={this.logOut}>Log Out</button>

         if(!this.state.uid ) {
            return  (
            <Login authenticate={this.authenticate}/>  )
         };
            if(this.state.uid !== this.state.owner) {
               return ( 
               <div>
               <p>sorry you are not the owner</p>
               { logOut}  
               </div>    
               );
            } 
            return (
                <div className="inventory">
                  <h2>Inventory</h2>
                  { logOut} 
                  {Object.keys(this.props.fish).map(key =>( <EditFishForm
                      key={key}
                      index={key}
                      fish={this.props.fish[key]}
                      inputFish={this.props.inputFish}
                      deleteFish={this.props.deleteFish}/>
                  ))}
                  <AddFishForm upDateFish={this.props.upDateFish} />
                  <button onClick={this.props.loadFishSamples}>
                    Load Sample Fishes
                  </button>
                </div>
              );
    }
}

export default Inventory;


 
