import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/';
import Login from './Login/';
import  PasswordRecovery from './PasswordRecovery/';
import SignUp from './SignUp/'; 
import About from './About/';
import Users from './Users';


 
function Public(props) {
  return (
    <main>
      <BrowserRouter>
      
        <Route path="/" exact component={Home} />
        <Route path="/Login" render={()=><Login setAuthentication={props.setAuthentication} />} />
        <Route path="/SignUp" render={()=><SignUp setAuthentication={props.setAuthentication} />} />
        <Route path="/PasswordRecovery" component={PasswordRecovery} />
        <Route path="/About" component={About} />
        <Route path="/Users" component={Users}/>
      </BrowserRouter>
    </main>
  );
}

export default Public;
