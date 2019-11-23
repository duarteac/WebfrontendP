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
    

     return (
       <div className="rooti">
        <React.Fragment>
          <MuiThemeProvider theme ={theme}>
            <Grid classname="Conti">
              <h1 className="Titulo"> SSSSSSSS</h1>
              <input type="file" onChange= {event =>previewFile()}></input>
             <img src="" height="200" alt="Image preview..."></img>
              <Button onClick={ updateuser }>actualizar usuario</Button>
              <TextField defaultValue="nombre"
              onChange = {e => setName(e.target.value)}
              />
          </Grid>
          </MuiThemeProvider>
        </React.Fragment>
        </div>
      );
 

}

export default Profile;