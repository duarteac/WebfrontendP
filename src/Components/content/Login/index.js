import React, { useState}  from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import {login} from './../../../services/fire';
 
import Logo from './../../utils/logo';
import Loading from './../../utils/loading';
 
function Login(props) {
  
    const [variant, setVariant] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const handleSubmit = (evt) => {
    
        evt.preventDefault();
        setLoading(true);
        if(email && password){
          login(email, password)
          .then(user =>{
              setVariant('success');
              setMessage('Usuario autorizado');
              setOpen(true);
              setTimeout(()=>{
                props.setAuthentication(true);
              
                sessionStorage.setItem('user',user.user.uid); 
                setLoading(false);                 
              }, 2000); 
          })
          .catch(err=>{
            setTimeout(()=>{
              setVariant('error');
              setMessage('Credenciales inválidas');
              setOpen(true);
              setPassword('');
              setLoading(false);
            }, 2000);  
          });
        }else{
          setVariant('error');
          setMessage('Digite todos los campos');
          setOpen(true);
          setPassword('');
          setLoading(false);
        }
      };
    return (
        <Container component="main" maxWidth="xs" className="login">
       
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Logo />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography component="h1" variant="h5">
                Inicia sesión en myTwitter
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Correo"
                  type="email"
                  name="email"
                  autoComplete="email"              
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"              
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Inicia sesión
            </Button>
            </Grid>
              <Grid item xs={12}>
                <Typography component="p">¿Ya tienes cuenta? <Link to="/passwordRecovery">¿Olvidaste tu contraseña?</Link></Typography>
                <Typography component="p">¿Nuevo en myTwitter? <Link to="/signup">Regístrate ahora »</Link></Typography>
  
              </Grid>
            </Grid>
          </form>
        
        
         
    </Container>
    );
    }  
    export default Login;