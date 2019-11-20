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


function Private(props) {

  const signout = () => {
    props.setAuthentication(false);
  }

  return (
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
  );
}

export default Private;