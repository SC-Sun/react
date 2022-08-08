import Rebase from 're-base';
import firebase from 'firebase';
 
 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDwehwpFZmN8iDuZD6Zs0zZWlJR_XI2jzA",
    authDomain: "catch-of-the-day---sun.firebaseapp.com",
    databaseURL: "https://catch-of-the-day---sun-default-rtdb.europe-west1.firebasedatabase.app"});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base; 

 