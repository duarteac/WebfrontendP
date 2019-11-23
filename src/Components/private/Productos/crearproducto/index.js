import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import {update} from '../../../../services/fire';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../../../theme';
import{addImage} from '../../../../services/fire';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';









function crearproducto() {
   
  
   
  return (
    <div className="rootcrp">
  <React.Fragment>
  <MuiThemeProvider theme ={theme}>
  <Grid   className="conticrp"
      container
      direction="column"
      justify="center"
      alignItems="center"> 
        <Grid   item
        className="conti2crp"
        lg={7}
        xs={12} >
          <h1 >Crear Producto</h1>
        <form className="organizar2">
              <TextField id="filled-basic" label="Nombre" variant="filled"    className="text"
           
              />
               <TextField id="filled-basic" label="Descripcion" variant="filled"   className="text"
              
              />
               <TextField  id="filled-basic" label="Costo" variant="filled"  className="text"
           
              />
                <TextField id="filled-basic" label="Cantidad" variant="filled"  className="text"
    
              />
              </form>
  
              <Button   variant="contained" 
        color="primary"
        className="bt2"  href={'./../Productos'}
          >Crear Producto</Button>
       
 </Grid>
 
  </Grid>
  <footer  className = "impro">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Todo los derechos reservados a Andres Duarte,Jesús García y Raul Julíao
        </Typography>

        </footer>
</MuiThemeProvider>
    
  </React.Fragment>

    </div>
  );
}
export default crearproducto;