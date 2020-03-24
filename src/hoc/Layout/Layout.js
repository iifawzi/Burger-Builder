import React, { Component } from "react";
import Aux from "../Aux/Aux"
import classes from "./Layout.module.css"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"
class Layout extends Component{ 
    state = {
        isMenuOpen: false,
    }
    ToggleWhenClick = ()=>{
        const isMenuOpen = this.state.isMenuOpen;
        this.setState({isMenuOpen: !isMenuOpen});
    }
    render (){
        return(
    <Aux>
    <Toolbar clicked={this.ToggleWhenClick} show={this.state.isMenuOpen} />
    <SideDrawer show={this.state.isMenuOpen} clicked={this.ToggleWhenClick}/>
    <main className={classes.Content}>
        {this.props.children}
    </main>
    </Aux>
)
    }
}

export default Layout