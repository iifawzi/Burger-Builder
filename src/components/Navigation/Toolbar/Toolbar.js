import React from "react";
import classes from "./Toolbar.module.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
const toolbar = (props)=>{
    let attachedClasses = [classes.MobileOnly,classes.DrawerToggle]
    return (
<header className={classes.Toolbar}>
    <div className={attachedClasses.join(" ")} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <Logo height="80%" />
    <nav className={classes.DesktopOnly}>
       <NavigationItems/>
    </nav>
</header>
    )

}

export default toolbar;