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



const register = () =>{

  


  return(
    <div className="root">
      <Grid
        className="grid"
        container
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
          <div className="content" >
            
            <div  className="contentBody">
              <form
                className= "form"
              >
                <Typography
                  className="title"
                  variant="h2"
                >
                  Registrarme
                </Typography>
                <TextField
                  fullWidth
                  className="textField"
                  label="Nombre"
                  name="f_name"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  className="textField"
                  label="Apellido"
                  name="l_name"
                  type="text"
                  variant="outlined"
                />
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
                  className="signInButton"
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Registrarme
                </Button>
                <Typography
                  color="#D92588"
                  variant="body1"
                >
                  Iniciar sesión
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default register;