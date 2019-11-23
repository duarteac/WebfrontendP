import React from 'react';
import {Link} from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from './../../utils/logo';
import theme from '../../theme';
import Buttom from '@material-ui/core/Button';
import './style.scss';
import Content from '@material-ui/core/Container';

function Home() {
  return (
 <div className = "rt">
  <Grid item xs={12} container className="gridhome">
    <div className="contenthome">

        <MuiThemeProvider theme={theme}>
        <Logo className = "logoa"></Logo> 
        <Typography component="h2" variant="h2" className="tittle">Bienvenido a Hades</Typography>
       

        <Typography component="p">¿Ya tienes cuenta? <Buttom><Link to="/login">Inicia sesión</Link></Buttom></Typography>
        <Typography component="p">¿Deseas Registrarte?<Buttom><Link to="/signup">Únete »</Link></Buttom></Typography>
        <Typography component="p">¿Deseas Conocer mas de nosotros? <Buttom><Link to="/About">Acerca de »</Link></Buttom></Typography>
        <Typography component="p">¿No recuerdas tu contraseña? <Buttom><Link to="/PasswordRecovery">Click aquí para obtenerla »</Link></Buttom></Typography>
 
        </MuiThemeProvider>
        
      </div>
      
  </Grid>
 </div>
  );
}

export default Home;
