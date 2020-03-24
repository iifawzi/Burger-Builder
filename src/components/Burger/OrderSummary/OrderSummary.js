import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux"
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
    componentWillUpdate(){
        console.log("order summary will update")
    } // will not update 
 render(){
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey=>{
        return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}</li>
        })
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>a Delicious burger with the following ingredients</p>
                <ul>
            {ingredientSummary}
                </ul>
        <p><strong>Total Price: </strong>{this.props.price}</p>
                <p>Countinue to Checkout?</p>
                <Button clicked={this.props.purchaseCancelled} btnType="Danger">Cancel</Button>
                <Button clicked={this.props.purchaseContinued} btnType="Success">Countinue</Button>
            </Aux>
        )
 } 
}


export default OrderSummary;