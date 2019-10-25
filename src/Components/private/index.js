import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import {update} from './../../services/fire';
 

function Private(props) {

  const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

  const signout = () => {
    props.setAuthentication(false);
  }
  const updateuser= () =>{
    var id = sessionStorage.getItem('user');
    update(id,email, name)
    console.log("update succes")
  }

  return (
    <div>
      <h1>Private</h1>
      <Button onClick={ updateuser }>actualizar usuario</Button>
      <TextField defaultValue="nombre"
      onChange = {e => setName(e.target.value)}
      />
      <TextField defaultValue="correo"
      onChange = {e => setEmail(e.target.value)}
      />
      <Button onClick={signout}>Logout</Button>
    </div>
  );
}

export default Private;