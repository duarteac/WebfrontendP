import React, { useState}  from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import {login} from './../../../services/fire';
import {Consumer} from '../../../AuthContext';
import Logo from './../../utils/logo';
import Loading from './../../utils/loading';
import { makeStyles } from '@material-ui/core/styles';
import './style.scss';



function Login(props) {
  
    const [variant, setVariant] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const handleSubmit = (evt,setAuth) => {
    
        evt.preventDefault();
        setLoading(true);
        if(email && password){
          login(email, password)
          .then(user =>{
              setVariant('success');
              setMessage('Usuario autorizado');
              setOpen(true);
              setTimeout(()=>{
    
              
                sessionStorage.setItem('user',user.user.uid); 
                setLoading(false); 
                setAuth(true);                
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
     // <div className="prueba">
     <Consumer>
     {({setAuth}) => (

<form  onSubmit={e=>handleSubmit(e, setAuth)}>
        <div className="root">
          <Grid
            container
            className="grid"
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              className="content"
              lg={7}
              xs={12}
            >
              <div className="content">
                
                <div className="contentBody">
                  <form
                    className= "form"
                  >
                      <Typography
                     align = 'center'
                     
                     >
                     <Logo />

                     </Typography>
                   
                    <Typography
                      className="title"
                      variant="h2"
                      align = 'center'
                    >
                      
                      Iniciar Sesión
                    </Typography>
                    
                    <TextField
                      fullWidth
                      className="textField"
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      value = {email}
                      onChange = {e => setEmail(e.target.value)}
                    />
                    <TextField
                      fullWidth
                      className="textField"
                      label="Contraseña"
                      name="password"
                      type="password"
                      variant="outlined"
                      value = {password}
                      onChange =  {e => setPassword(e.target.value)}
                    />   
                    <Button 
                      color="primary"
                      className="signInButton"
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"

                    >
                      
                      INICIAR SESIÓN
                      
                    </Button>  
                    <Typography
                      color="#D92588"
                      variant="body1"
                    >
         
                     
                    </Typography>
                    
            <Grid item xs={12}>
              <Typography component="p">¿No tienes cuenta? <Link to="/SignUp">¿Desea Registrarse?</Link></Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="p">¿No recuerdas tu clave? <Link to="/PasswordRecovery">Click aquí para obtenerla</Link></Typography>
            </Grid>
                  </form>
                 </div>
              </div>
            </Grid>
          </Grid>
        </div>
        </form>
         )}
         </Consumer>
     
       // </div>
      );
    }
    
    export default Login;