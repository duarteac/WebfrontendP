import React,{useState, useEffect} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Public from './content';
import Private from './private';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Header from './Layout/Header';
import {signout} from './../services/fire';
import Home from './content/Home';
import theme from './theme';
function Main() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const uid = sessionStorage.getItem("user");
    uid !== null && setIsAuth(true);
  },[isAuth]);

  const setAuthentication = val => { 
    if(!val){
      signout();
      sessionStorage.clear();
      
    }  
    setIsAuth(val);
  }
    return (
      <main className="main">
        
            
        <MuiThemeProvider theme={theme}>
            {
            isAuth ?  
              <Private setAuthentication={setAuthentication} />
            :  
              <Public setAuthentication={setAuthentication} />
        
          }   
               </MuiThemeProvider>
         
                   
      </main>
    )
  }


export default Main;