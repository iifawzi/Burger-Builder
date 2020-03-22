import React from "react";
import classes from "./burger.module.css"
import BurgerIngredient from "./Burgeringredient/Burgeringredient"
import Burgeringredient from "./Burgeringredient/Burgeringredient";
const burger = (props)=>{
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey=>{
     return  [...Array(props.ingredients[igKey])].map((_,i)=>{
        return <Burgeringredient key={igKey +i} type={igKey} />
    })
    })
    ;
    return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
{transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
    </div>
);
}



export default burger;