import { object } from 'prop-types';
import firebase from 'firebase';
import React from 'react';
 import AddFishForm from './AddFishForm';
 import EditFishForm from './EditFishForm';
 import PropTypes from 'prop-types';
 import Login from './Login';
 import {firebaseApp} from '../base';
 

class Inventory extends React.Component {
    static propTypes = {
        fish: PropTypes.object,
        upDateFish: PropTypes.func,
        inputFish: PropTypes.func,
        upDateFish: PropTypes.func,
        loadFishSamples:PropTypes.func,
        deleteFish:PropTypes.func,
    }
  
    authHandler = async (authData) => {
        console.log(authData);
    }
    authenticate = (provider) => { 
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    

    }
    render() {
         return <Login authenticate={this.authenticate}/>
    }
}

export default Inventory;

 