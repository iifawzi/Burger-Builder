import React from "react";
import classes from "./burger.module.css"
import BurgerIngredient from "./Burgeringredient/Burgeringredient"
const burger = (props)=>{
    return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        <BurgerIngredient type="Cheese"/>
        <BurgerIngredient type="Cheese"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="Salad"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="meat"/>

        <BurgerIngredient type="bread-bottom"/>
    </div>
);
}



export default burger;