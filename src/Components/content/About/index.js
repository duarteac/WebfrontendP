import React from 'react';
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Typography from'@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';

import './style.scss';
function About() {

  return (
      
    <html className="all">
        <header className= "head">
          <nav className = "nav"> 
          <AppBar position= 'static' color ="000001"> 
              <toolbar> 
                  
          <Button color="inherit"> <Link to="/"> Home </Link> </Button>
          <Button color="inherit"><Link to="/SignUp"> Register</Link></Button>
          <Button color="inherit"><Link to="/Login"> Login</Link></Button>
          </toolbar>
          </AppBar>
          </nav>
      </header>
  
    <body className="body">
     <Container>
     <Typography component="div" style={{ backgroundColor: "ffff", height: '50vh' }} >
      <h2 className="about" > About-us</h2>
        <p>
          Nombres: Andres Duarte.<br/>
         Jesus Garcia.<br/> 
         Raul juliao.<br/>
          Somos estudiantes de ingeniera de sistemas interesados en aprender acerca del desarrollo
          de aplicaciones web 
        </p>
        <Typography component="p">
          este proyecto tiene como fin aplicar los conocimientos aprendidos en la materia, asi<br/> 
          como tambien aprender mas sobre la marcha para un mejor desarrollo de los conocimientos. 
        </Typography>
        </Typography>
        </Container>
          </body>

          <footer className= "footer">
            <Paper>
              <Typography variant="h5" component="h3">
                Para mayor informacion
                  
              </Typography>
            </Paper>
            <Typography component="p">
              Contactenos a cualquiera de los correos <br/>
              duarteac@uninorte.edu.co<br/>
              garciajg@uninorte.edu.co<br/>
              raulj@uninorte.edu.co<br/>
              </Typography>
          </footer>
          </html>
 
  );
}

export default About;