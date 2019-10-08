import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/Login";
import Register from "./pages/register";

const App  = () => (
    <Router>
        <div>
            <Route path="/" exact component={Landing} />
            <Route path="/login" exact component={Login} />
            <Route path="/registrarme" exact component={Register}/>
            {/* <Route path="/about/" component={register} />
            <Route path="/users/" component={about_us} /> */}
        </div>
    </Router>
)
  
export default App;