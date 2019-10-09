import React, { useState}  from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';
import Logo from './../../utils/logo';
import { browserHistory } from 'react-router';
import {passwordRecovery} from './../../../services/fire';
 
function PasswordRecovery() {
  const [variant, setVariant] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  
  const [email, setEmail] = useState('');
 

  const handleSubmit = (evt) => {
    
    evt.preventDefault();
   
    setLoading(true);
    if(email){
      passwordRecovery(email)
      .then(user =>{
          setVariant('success');
          setMessage('Se ha enviado un correo para restablecer su clave');
          setOpen(true);
          setTimeout(()=>{
            setEmail('');
            setLoading(false);                 
          }, 2000); 
         
      })
      .catch(err=>{
        setTimeout(()=>{
          setVariant('error');
          setMessage('Correo inválido');
          setOpen(true);
          setLoading(false);
        }, 2000);  
      });
    }else{
      setVariant('error');
      setMessage('Digite un correo');
      setOpen(true);
      setEmail('');
      setLoading(false);
    }

  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (

      <Container component="main" maxWidth="xs" className="passwordRecovery">
     
        <form onSubmit={handleSubmit} >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography
            align = 'center'>
            <Logo />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography component="h1" variant="h5" align = 'center'> 
              Recupera tu contraseña
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              type="email"
              label="Correo"
              name="email"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
    
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        
        >
          Enviar
    
        </Button>
       
        </Grid>
          <Grid item xs={12}>
            <Typography component="p">¿Ya tienes cuenta? <Link to="/login">¿Inicia sesión?</Link></Typography>
            <Typography component="p">¿Nuevo en myTwitter? <Link to="/signup">Regístrate ahora »</Link></Typography>
          </Grid>
        </Grid>
      </form>
    
      </Container>
  );
}

export default PasswordRecovery;
