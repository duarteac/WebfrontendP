import React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



function Home() {
  return (

    <Grid container component="main" className="container">
    <Grid item xs={12} sm={6} md={7} className="home home-left">
      <div className="content">
      <Typography component="h6" variant="h6">Esto idealmente sería el home de hades.</Typography>
      <Typography component="h6" variant="h6">idealmete...</Typography>
      <Typography component="h6" variant="h6">Home en progreso.</Typography>
        
        </div>
    </Grid>
    <Grid item xs={12} sm={6} md={5} className="home">


    <div className="content">
        <Typography component="h5" variant="h5">Bienvenido a Hades</Typography>
        <Typography component="p">:D .</Typography>
        


        <Typography component="p">¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></Typography>
        <Typography component="p">¿Deseas Registrarte? <Link to="/signup">Únete »</Link></Typography>
        <Typography component="p">¿Deseas Conocer mas de nosotros? <Link to="/About">Acerca de »</Link></Typography>
        <Typography component="p">¿No recuerdas tu contraseña? <Link to="/PasswordRecovery">Click aquí para obtenerla »</Link></Typography>
      </div>
    </Grid>
    </Grid>
   
  );
}

export default Home;
