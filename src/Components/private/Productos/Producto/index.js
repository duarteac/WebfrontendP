import React , { useState, useEffect } from 'react'
import {getoneproduct} from '../../../../services/fire'
import {useParams} from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import  './style.scss'

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      marginBottom :  '40px',
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
  

function Producto(){

  const classes = useStyles();
console.log("esta entrando al producto")
let { id:productid } = useParams();

const [product, setOneProduct] = useState({});
  useEffect(() => {
    
    const getOneprod = async()=>{
      const prod = await getoneproduct(productid);
      setOneProduct(prod)
      console.log(await getoneproduct(productid))
    }
    getOneprod()
  },[]);
    return(
      <Grid container
      className="gridprod"
      direction="column"
      justify="left"
      alignItems="center">
        <div className="Titleinv">
          <h2>Producto Especifico</h2>
      </div>
        <div className="mainprod">
        <Input
        defaultValue={product.nombre}/> 
      </div>
      </Grid>

    );
}

export default Producto ;