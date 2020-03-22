import React from "react";
import buildControls from "../BuildControls";
import classes from "./BuildControl.module.css";


const buildControl = (props)=>{
    const moreClick = props.moreClick;
    const lessClick = props.lessClick;
    return(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button onClick={()=>lessClick(props.type)} className={classes.Less} disabled={props.disabled}>Less</button>
        <button onClick={()=>moreClick(props.type)} className={classes.More}>More</button>
    </div>
)}

export default buildControl;