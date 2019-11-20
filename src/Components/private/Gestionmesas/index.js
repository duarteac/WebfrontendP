import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../../theme';
import Buttom  from '@material-ui/core/Button'



function Gestionmesas(){
    return(
        <React.Fragment>
            <MuiThemeProvider theme ={theme}>
            <h2>gestion de mesas</h2>
            <Buttom>crear mesa</Buttom>
            <Buttom>actualizar mesa</Buttom>
            <Buttom>borrar mesa</Buttom>
            <Buttom>listar mesas</Buttom>
            </MuiThemeProvider>
        </React.Fragment>
    );
}

export default Gestionmesas;