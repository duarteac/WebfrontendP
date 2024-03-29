import React, { useState, useEffect } from 'react';
import Button  from '@material-ui/core/Button'
import Footer  from '@material-ui/core/TableFooter'
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/IconButton';
import './style.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import {fade, makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import  {signout} from './../../../services/fire';
import InputBase from '@material-ui/core/InputBase';
import Crp from './../Productos/crearproducto';
import {BrowserRouter,Route} from 'react-router-dom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {getorder} from './../../../services/fire';
import TextField from '@material-ui/core/TextField';
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}
const handleSubmit = (evt, setAuth) => {
  evt.preventDefault();
  sessionStorage.clear();
  signout();
  setAuth(false);
}
const rows = [
  createData(0, '1', 'Beef', 'algo 1', ' a', 312.44),
createData(1, '2', 'salad', 'algo 2, UK', 'b ', 866.99),
createData(2, '3', 'agua panela', 'algo 3, MA', 'c', 100.81),
createData(3, '4', 'jugo de mora', 'algo 4, IN', 'd ', 654.39),
createData(4, '5', 'maracuyá', 'algo 5', 'E ', 212.79),
];
const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
  },
  div: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing(1),
    marginBottom :  '40px',
    
  },
  button2: {
    margin: theme.spacing(1),
    marginTop :  '80px',
    marginLeft : '140px',
  },
  seeMore: {
    marginTop: theme.spacing(3),
  
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function Productos(){

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    
    const getorders = async()=>{
        const ord = await getorder();
      setOrders(ord)
      console.log(await getorder())
    }
    getorders()
  },[]);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
    
  };

  const handleClickAway = () => {
    setOpen(false);
  };

return(

    <React.Fragment>
       
<BrowserRouter>
<Route   path="./crearproducto" render={()=><Crp/>} />

        <main className = "mainord">
        <div className = "ordero">
        <ClickAwayListener onClickAway={handleClickAway}>
        <div className={classes.wrapper}>
        <Button onClick={handleClick} variant="contained" color="primary" className={classes.button2 } >   
        ¿Desea crear una orden?
      </Button>
      {open ? (
         <aside className="asideord">
        
         <h2 className="opc">Opciones</h2>
         <form className="organizar2">
              <TextField id="filled-basic" label="Pedido" variant="filled"    className="text"
           
              />
               <TextField id="filled-basic" label="Descripcion" variant="filled"   className="text"
              
              />
               <TextField  id="filled-basic" label="Costo" variant="filled"  className="text"
           
              />
                 
              </form>
         <Button variant="contained" color="primary" className={classes.button } href={'./crearproducto'}>   
         Crear Orden
       </Button>
     
         </aside>
    
    ) : null}
  </div>
  </ClickAwayListener>
       
        </div>
        <Grid container
  className="gridord"
  direction="column"
  justify="left"
  alignItems="center"> 
          
        <div className="Titleinv">
        <h2 >Ordenes</h2>
        </div>
      
 
      <Table stickyHeader aria-label="sticky table" className = "highlight" size="medium">
        <TableHead  >
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Mesa</TableCell>
            <TableCell align="center">Orden</TableCell>
            <TableCell align="center">Detalles</TableCell>
            <TableCell align="center">Borrar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => (
            <TableRow key={order.orderid}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.nombre}</TableCell>
              <TableCell>{order.descripcion}</TableCell>
              {/* <TableCell>{order.costo}</TableCell> */}

       
              <TableCell>{ <Button variant="contained"  color="primary" className={classes.button} onClick={handleClick}  >
       ver
      </Button>}</TableCell>
              <TableCell>{ <Button   variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />} >
        Borrar
      </Button>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="#000" href="javascript:;">
          See more orders
        </Link>
      </div>

      </Grid>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      
      </footer>
     
      </BrowserRouter>
    </React.Fragment>

);
}
export default Productos;