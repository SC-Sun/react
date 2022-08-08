import React from 'react';
import PropTypes from 'prop-types';


const Login = (props)=>(
    <nav className="login">
<h2>Inventor loging in</h2>
<p>Sign in to manange your store Inventory</p>
<button className="github" onClick={ ()=> props.authenticate('Github')}>Login with Github</button>
<button className="facebook" onClick={ ()=> props.authenticate('facebook')}>Login with Facebook</button>
<button className="twitter" onClick={ ()=> props.authenticate('Twitter')}>Login with Twitter</button>
    </nav>
);

Login.propTypes ={
    authenticate: PropTypes.func.isRequired,
     
}
export default Login;