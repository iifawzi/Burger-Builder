import React from "react";
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import classes from "./SideDrawer.module.css"
import Backdrop from "../../../components/UI/Backdrop/Backdrop"
const sideDrawer = (props)=>{
    let attachedClasses= [classes.SideDrawer, classes.Close];
    if (props.show){
        attachedClasses = [classes.SideDrawer,classes.Open];
    }
    return (
<div>
    <Backdrop show={props.show} clicked={props.clicked} />
    <div className={attachedClasses.join(" ")}>
    <div className={classes.logo}>
    <Logo />
    </div>
  
    <nav>
        <NavigationItems />
    </nav>
    </div>
</div> 
    )
    
}


export default sideDrawer;