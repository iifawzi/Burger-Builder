import React from "react";
import Aux from "../../../hoc/Aux"
import Button from "../../UI/Button/Button";
const orderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients).map(igKey=>{
    return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>a Delicious burger with the following ingredients</p>
            <ul>
        {ingredientSummary}
            </ul>
    <p><strong>Total Price: </strong>{props.price}</p>
            <p>Countinue to Checkout?</p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">Cancel</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">Countinue</Button>
        </Aux>
    )
}


export default orderSummary;