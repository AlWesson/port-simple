import React, {useState} from "react";
import { About, Projects, Contact, Resume, Footer} from "./components";
import { Typography, AppBar, Button, Toolbar} from "@material-ui/core";
import './app.css';
import './components/header.css';




function App() {
  const [view, setView] = useState(0);

  const components = [<About />, <Projects />, <Contact />, <Resume />];
  

  return (
    <div className="App" >
      <AppBar position="static">
        <Toolbar 
          className="toolbar"
          variant="regular"
          style={{
            backgroundColor:'#333333',
            color: 'gold',
            border: 'dashed gold',
            textShadow: 'gold'
          }}
        >
        <Typography 
          variant="h5" 
          color="inherit"
        >
        Albert Hernandez
        </Typography>
        <div 
          className="buttonContainer"
        >
          <Button color="inherit"  onClick={() => setView(0)}>
            About
          </Button>
          <Button color="inherit"  onClick={() => setView(1)}>
            Portfolio
          </Button>
          <Button color="inherit"  onClick={() => setView(2)}>
            Contact
          </Button>
          <Button color="inherit"  onClick={() => setView(3)}>
            Resume
          </Button>
        </div>
        </Toolbar>  
      </AppBar>

      {components[view]}

      <Footer />
    </div>
  );
}

export default App;
