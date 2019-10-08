import React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Home() {
  return (
    <Grid container component="main" className="container">
    <Grid item xs={12} sm={6} md={7} className="home home-left">
      <div className="content">
      <Typography component="h6" variant="h6">Sigue lo que te interesa.</Typography>
      <Typography component="h6" variant="h6">Entérate de lo que está hablando la gente.</Typography>
      <Typography component="h6" variant="h6">Únete a la conversación.</Typography>
        
        </div>
    </Grid>
    <Grid item xs={12} sm={6} md={5} className="home">


    <div className="content">
        <Typography component="h5" variant="h5">Descubre lo que está pasando en el mundo en este momento</Typography>
        <Typography component="p">Únete hoy a myTwitter.</Typography>
        


        <Typography component="p">¿Ya tienes cuenta? <Link to="/login">¿Inicia sesión?</Link></Typography>
        <Typography component="p">¿Nuevo en myTwitter? <Link to="/signup">Regístrate ahora »</Link></Typography>
        <Typography component="p">About us <Link to="/About"> About»</Link></Typography>
      </div>
    </Grid>
    </Grid>
  );
}

export default Home;
