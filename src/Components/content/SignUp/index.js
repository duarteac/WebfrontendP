import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Logo from './../../utils/logo';
//import Loading from './../../utils/Loading';
import {signup} from './../../../services/fire';

function SignUp(props) {
  const [variant, setVariant] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    

    if(name && email && password && confirmPassword){
      if(password===confirmPassword){
        setLoading(true);
        signup(email, password)
        .then(user =>{
            setVariant('success');
            setMessage('Cuenta creada exitosamente');
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
            setMessage('Datos inválidos');
            setOpen(true);
            setPassword('');
            setConfirmPassword('');
            setLoading(false);
          }, 2000);  
        });
      }else{
        setVariant('error');
        setMessage('Las contraseñas no coinciden');
        setOpen(true);
        setPassword('');
        setConfirmPassword('');
      }
    }else{
      setVariant('error');
      setMessage('Digite todos los campos');
      setOpen(true);
      setPassword('');
      setConfirmPassword('');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Container component="main" maxWidth="xs" className="signup">
    
        
        <form  onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Logo />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography component="h1" variant="h5">
                Crea tu cuenta
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nombre"
                autoFocus           
                value={name}
                onChange={e => setName(e.target.value)}
            
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo"
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
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirmar contraseña"
                type="password"
                id="confirmPassword"           
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
            
              />
            </Grid>
            <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="button"
          >
            Sign Up
          </Button>
          </Grid>
            <Grid item xs={12}>
              <Typography component="p">¿Ya tienes cuenta? <Link to="/login">¿Inicia sesión?</Link></Typography>
            </Grid>
          </Grid>
        </form>
       

  </Container>
  );
}

export default SignUp;