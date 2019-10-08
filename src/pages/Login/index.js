import React, { useState, useEffect }  from "react";
import validate from 'validate.js';
import PropTypes from 'prop-types';
import {
    Grid,
    Button,
    IconButton,
    TextField,
    Link,
    Typography,
    Card,
    CardMedia,
    CardContent
  } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import styles from './_style.scss';



const Login = props =>{


  return(
    <div className="root">
      <Grid
        container
        className="grid"
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          className="content"
          lg={7}
          xs={12}
        >
          <div className="content">
            
            <div className="contentBody">
              <form
                className= "form"
              >
                <Typography
                  className="title"
                  variant="h2"
                >
                  Iniciar Sesión
                </Typography>
                
                <TextField
                  fullWidth
                  className="textField"
                  label="Email"
                  name="email"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  className="textField"
                  label="Contraseña"
                  name="password"
                  type="password"
                  variant="outlined"
                />
                <Button
                  color="primary"
                  className="signInButton"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  INICIAR SESIÓN
                </Button>
                <Typography
                  color="#D92588"
                  variant="body1"
                >
                  Nuevo por aquí?{' '}
                  
                    Registrarme
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;