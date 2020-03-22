import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger"
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            Salad : 1,
            bacon: 1,
            Cheese: 2,
            meat: 2,
        }
    }
render(){
    return (
     <Aux>
        <Burger ingredients={this.state.ingredients} />
         <div>Build Controls</div>
     </Aux>
    );
}
}


export default BurgerBuilder;