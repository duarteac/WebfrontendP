import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import {update} from './../../../services/fire';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../../theme';
import{addImage} from './../../../services/fire';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
const Profile = () => {
    const [name, setName] = useState('');

    const updateuser= () =>{
        var id = sessionStorage.getItem('user');
        update(id, name)
        console.log("update succes")
      }
   
      function previewFile() {
        var preview = document.querySelector('img');
        var fileloaded   = document.querySelector('input[type=file]');
        
        if(file== null ){
          return null ;
        }
        var file = fileloaded.files[0];
        var url = addImage("perfil/"+sessionStorage.getItem("user"),file);
    
        var reader  = new FileReader();
    
        reader.onloadend = function () {
          preview.src = reader.result;
        }
      
        if (file) {
          reader.readAsDataURL(file);
        } else {
          preview.src = "";
        }
        return reader;
      }
    
      const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        
        bigAvatar: {
          width: 140,
          height: 140,
          marginBottom:40,
        },
        input: {
          display: 'none',
        },
      })); 
      const classes = useStyles();
     return (

       <div className="rooti">
        <React.Fragment>
          <MuiThemeProvider theme ={theme}>
            <Grid   className="conti"
      container
      direction="column"
      justify="center"
      alignItems="center">
              <Grid   item
        className="content2"
        lg={7}
        xs={12} >
          <div className={classes.root}>
 
      <Avatar alt="Remy Sharp" src="https://st.mngbcn.com/static/assets/img/landings/blackFriday/black_shop.jpg" className={classes.bigAvatar} />
    </div>
              <form className="organizar">
              <TextField id="filled-basic" label="Nombre" variant="filled"    className="text"
              onChange = {e => setName(e.target.label)}
              />
               <TextField id="filled-basic" label="Apellido" variant="filled"   className="text"
              onChange = {e => setName(e.target.label)}
              />
               <TextField  id="filled-basic" label="Correo" variant="filled"  className="text"
              onChange = {e => setName(e.target.label)}
              />
                <TextField id="filled-basic" label="Celular" variant="filled"  className="text"
              onChange = {e => setName(e.target.label)}
              />
              </form>
               <Grid   item
        className="content3"
        lg={7}
        xs={12} > 
              <input accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"/>
               <label htmlFor="contained-button-file">
        <Button color = "primary" variant="contained" component="span" className="bt"  startIcon={<CloudUploadIcon />} >
          Subir Imagen
        </Button>
      </label>
      
              <Button   variant="contained" 
        color="primary"
        className="bt"
        onClick={ updateuser }>actualizar usuario</Button>
             </Grid>
              </Grid>
          </Grid>
          </MuiThemeProvider>
        </React.Fragment>
        </div>
      );
 

}

export default Profile;