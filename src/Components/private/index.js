import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import {update} from './../../services/fire';
import {Consumer} from './../../AuthContext';
import  {signout} from './../../services/fire';
function Private(props) {

  const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');


  const handleSubmit = (evt, setAuth) => {
    evt.preventDefault();
    sessionStorage.clear();
    signout();
    setAuth(false);
  }

  const updateuser= () =>{
    var id = sessionStorage.getItem('user');
    update(id,email, name)
    console.log("update succes")
  }

  return (
    <div>
      <h1>Private</h1>

      <Consumer>  
      {({setAuth}) => (
//llamado de la función que se ejecuta al hacer clic. Recibe como parámetro, el evento y la función que modifica el estado global
          <form onSubmit={e=>handleSubmit(e, setAuth)}>    
              <button
              type="submit">
                Cerrar sesión
              </button>
          </form>
        )}

      
      </Consumer>  

    </div>
  );
}

export default Private;