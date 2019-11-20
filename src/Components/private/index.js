import React from 'react';
import Button from '@material-ui/core/Button'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {BrowserRouter,Route} from 'react-router-dom';
import theme from '../theme';
import {Link} from 'react-router-dom';
import Profile from './Profile';
import Gestionmesas from './Gestionmesas'
import Productos from './Productos '
import Pedidos from './Pedidos'
import {AppBar, Tabs, Tab} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import {update} from './../../services/fire';
import {Consumer} from './../../AuthContext';
import  {signout} from './../../services/fire';


function Private(props) {


  const handleSubmit = (evt, setAuth) => {
    evt.preventDefault();
    sessionStorage.clear();
    signout();
    setAuth(false);
  }
   
  return (
    <div>
     <React.Fragment>
      <BrowserRouter>
      <MuiThemeProvider theme ={theme}>
      <AppBar >
        <Tabs 
        centered>
          <Link to ="/Profile"> <Tab label= "perfil"/></Link>
         <Link to = "/Gestionmesas"><Tab label="mesas" /></Link>
         <Link to = "/Productos"><Tab label="productos" /></Link>
         <Link to = "/Pedidos"><Tab label="pedidos" /></Link>
        </Tabs>
      </AppBar>
        <div>
          <h1>Private</h1> 
          </div>
      <Route exact path="/Profile" render={()=><Profile/>} />
      <Route exact path="/Gestionmesas" render={()=><Gestionmesas/>} />
      <Route exact path="/Productos" render={()=><Productos/>} />
      <Route exact path="/Pedidos" render={()=><Pedidos/>} />
      <Button onClick={signout}>Logout</Button>
      </MuiThemeProvider>
      </BrowserRouter>
    </React.Fragment>
      <h1>Private</h1>

      <Consumer>  
      {({setAuth}) => (
//llamado de la función que se ejecuta al hacer clic. Recibe como parámetro, el evento y la función que modifica el estado global
          <form onSubmit={e=>handleSubmit(e, setAuth)}>    
              <button
              type="submit">
                Cerrar sesión
              </button>
          </form>
        )}

      
      </Consumer>  

    </div>

  );
}

export default Private;