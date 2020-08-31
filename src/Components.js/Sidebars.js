import React,{useState} from 'react';
import { FaBars} from "react-icons/fa";
import SidebarData from "./SidebarData"
import{AiOutlineClose} from "react-icons/ai"
import "./NavBar.css"
import {IconContext} from "react-icons"
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
      } from "react-router-dom";
    

    


function SideBar(){
        const [sidebar,setSidebar]=useState(false);
        const showSidebar = ()=>setSidebar(!sidebar);

        return ( 

           
              
 < Router>   
 <IconContext.Provider value ={{color:"#000000"}}>       
<div className="navbar">

<Link to ="#" ClassName= "menu-bars">
        <FaBars onClick={showSidebar}/>
</Link>
</div>
<nav className={sidebar ? 'nav-menu active':'nav-menu'}>
        <ul ClassName="nav-menu-items">
                <li className="navbard-toggle">
                        <Link to ="#" className = "menu-close">
                        <AiOutlineClose  onClick={showSidebar} className="close"/>
                        </Link>

                </li>
                {SidebarData.map((item, index) =>  {
                        return(
                                <li key={index} className ={item.cName}>
                                 <Link to ={item.path}>
                                         <span>{item.title}</span>
                                 </Link>
                                </li>
                        );
                 
                                })}
                        

        </ul>
        

</nav>
</IconContext.Provider> 

</Router>
         );
    }

export default SideBar;