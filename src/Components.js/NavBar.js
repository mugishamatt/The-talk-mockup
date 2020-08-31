
import React from 'react';
import {FaTwitter} from "react-icons/fa";
   import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import Home from "../pages/Home"
import Facebook from "./facebook"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Interview from '../pages/Intrerview';

 class NavBar extends React.Component {
     constructor(props){
     super(props);
     this.state ={
     }

     }
     render(){
         return(
            <Router className="routes">
      <div className="route">
        <nav>
          <ul className="ulroutes">
          <li>
              <Link to="/the talk" className="the-talk"> The talk </Link>
            </li>
            <li>
              <Link to="/Interview Directory"> Interview Directory </Link>
            </li>
            <li>
              <Link to="/World">World Guide</Link>
            </li>
            <li>
              <Link to =""> <FaTwitter/></Link>
            </li>
            <li>
              <Link to ="https://www.facebook.com/TheTalksInterviews/"> <FaFacebookSquare/></Link>
            </li>
            <li>
              <Link to =""> <FaTwitter/></Link>
            </li>
          </ul>
        </nav>
        </div>
       
        <Switch>
          <div  className="content">
          <Route exact path="/the talk" component={Home}></Route>
        
          <Route path="/Interview Directory" component={Interview}></Route>
          <Route path="/World"> </Route>
          <Route path="#"> <FaTwitter/> </Route>
          <Route path="/facebook" component={Facebook}> <FaFacebookSquare/> </Route>
          <Route path="#"> <FaInstagramSquare/> </Route>

          </div>
          
        </Switch>
        </Router>
         )

     }
 }
 export default NavBar;