import React from "react";
import { BrowserRouter as Router, Route,  } from "react-router-dom"
import Home from "./pages/Home";
import Info from "./pages/Info";
import JustGuts from "./pages/JustGuts";
import Blog from "./pages/Blog"
import Nav from "./componets/Nav"

const App  = () => (
     
<Router>  
  <div>
    <Nav/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/info" component={Info}/>
      <Route exact path="/JustGuts" component={JustGuts}/>
      <Route exact path="/blog" component={Blog}/>
  </div>
</Router>
      
);

export default App;
