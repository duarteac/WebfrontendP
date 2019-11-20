import React from 'react'
import Buttom  from '@material-ui/core/Button'


function Pedidos(){
    
    return(
    <React.Fragment>
        <h2>Pedidos</h2>
        <Buttom>crear pedido</Buttom>
        <Buttom>actualizar pedido</Buttom>
        <Buttom>borrar pedido</Buttom>
        <Buttom>listar pedidos</Buttom>
    </React.Fragment>

    );
}
export default Pedidos;