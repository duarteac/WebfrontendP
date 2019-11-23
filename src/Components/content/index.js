import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/';
import Login from './Login/';
import  PasswordRecovery from './PasswordRecovery/';
import SignUp from './SignUp/'; 
import About from './About/';
import Users from './Users';
import container from '@material-ui/core/Container';
import './style.scss';
 
function Public(props) {
  return (
  

      <BrowserRouter>
        <div className="p3">
        <Route exact path="/" component={Home} />
      
        <Route path="/Login" render={()=><Login setAuthentication={props.setAuthentication} />} />
        <Route path="/SignUp" render={()=><SignUp setAuthentication={props.setAuthentication} />} />
        <Route path="/PasswordRecovery" component={PasswordRecovery} />
        <Route path="/About" component={About} />
        <Route path="/Users" component={Users}/>
        </div>
      </BrowserRouter>

   
  );
}

export default Public;
