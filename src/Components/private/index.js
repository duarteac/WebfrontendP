import React from 'react';
import Buttom from '@material-ui/core/Button'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {BrowserRouter,Route} from 'react-router-dom';
import theme from '../theme';
import {Link} from 'react-router-dom';
import Profile from './Profile';
import Gestionmesas from './Gestionmesas'
import Productos from './Productos'
import Pedidos from './Pedidos'
import {AppBar, Tabs, Tab} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import {update} from './../../services/fire';
import {Consumer} from './../../AuthContext';
import  {signout} from './../../services/fire';
import Logo from './../utils/logo';
import './style.scss';

function Private(props) {


  const handleSubmit = (evt, setAuth) => {
    evt.preventDefault();
    sessionStorage.clear();
    signout();
    setAuth(false);
  }
   
  return (
    <div className ="bodypriv">
     <React.Fragment>
      <BrowserRouter>
      <MuiThemeProvider theme ={theme}>
      <AppBar className = "Bar">
        <Tabs className = "tabs"
        centered>
          <Logo className="loggo"></Logo>
         <Buttom className="Boto2" variant="contained" color="secondary" href="./Profile"> Perfil  </Buttom>
         <Buttom className="Boto" variant="contained" color="secondary"  href="./Gestionmesas">   Gestion Orden </Buttom>
         <Buttom className="Boto" variant="contained" color="secondary"  href="./Productos">   Productos  </Buttom>
         <Buttom className="Boto"  variant="contained" color="secondary"  href="./Pedidos">   Pedidos   </Buttom>
         
      <Consumer>  
      {({setAuth}) => (
//llamado de la función que se ejecuta al hacer clic. Recibe como parámetro, el evento y la función que modifica el estado global
          <form onSubmit={e=>handleSubmit(e, setAuth)}>    
              <Buttom variant="contained" color="secondary" className = "cerrar"
              type="submit">
                Cerrar sesión
              </Buttom>
          </form>
        )}

      
      </Consumer>  
        </Tabs>
      </AppBar>
        <div>
          <h1>Private</h1> 
          </div>
      <Route exact path="/Profile" render={()=><Profile/>} />
      <Route exact path="/Gestionmesas" render={()=><Gestionmesas/>} />
      <Route exact path="/Productos" render={()=><Productos/>} />
      <Route exact path="/Pedidos" render={()=><Pedidos/>} />
      
      </MuiThemeProvider>
      </BrowserRouter>
    </React.Fragment>


    </div>

  );
}

export default Private;