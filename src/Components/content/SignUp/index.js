import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Logo from './../../utils/logo';
//import Loading from './../../utils/Loading';
import {signup, adduser} from './../../../services/fire';

import './style.scss';

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
            adduser(user.user.uid,name,email);
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
    <form  onSubmit={handleSubmit}>
    <div className="root">
    <Grid 
      className="grid"
      container
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
        <div className="content" >
          
          <div  className="contentBody">
            <form
              className= "form"
            > 
             <Typography

  align = 'center'>
     <Logo />
</Typography>
           

              <Typography
                className="title"
                variant="h2"
                align = 'center'
              >
                Registrarme
              </Typography>
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
              <Button
                className="signInButton"
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Registrarme
              </Button>
              <Grid item xs={12}>
              <Typography component="p">¿Ya posees una cuenta? <Link to="/Login">¿Logeate?</Link></Typography>
          
             
              </Grid>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  </div>
  </form>
  );
}

export default SignUp;