import React from 'react';
import { getUsers } from '../../../services/fire';
import { Card, Grid, Button, TextField, List, ListItem } from '@material-ui/core';



function Users(props) {

    const [usr, setUsr] = React.useState('');

    const signout = () => {
      props.setAuthentication(false);
    }

    const handleUsers = () =>{
        const data = getUsers();
        console.log(data)
        setUsr(data)
    }


    return (
      <div>
        <h1>Private</h1>
        <Card>
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                    sx={6}
                >
                    ver console
                </Grid>
                <Grid
                    item
                    sx={6}
                >
                    <Button
                        onClick={()=>handleUsers()}
                    >
                        Obtener usuarios
                    </Button>
                </Grid>
                <Grid
                    item
                    sx={6}
                >
                    <Button
                        onClick={signout}
                    >
                        Salir
                    </Button>
                </Grid>
            </Grid>
        </Card>
        
      </div>
    );
}
export default Users;