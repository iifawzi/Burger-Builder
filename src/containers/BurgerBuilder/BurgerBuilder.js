import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    Salad : 0.5,
    Cheese: 0.4,
    Meat: 1.3,
    Bacon: 0.7,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0
    },
    totalPrice : 4,
  };

  addIngredientHandler = type => {
    const ingredients = this.state.ingredients;
    const currentNumberOfType = ingredients[type];
    const newIngredient = currentNumberOfType + 1;
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = newIngredient;
    const priceAddtion = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddtion;
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice,
    });
  };
  removeIngredientHandler = type => {
    const ingredients = this.state.ingredients;
    const currentNumberOfType = ingredients[type];
    if (currentNumberOfType != 0){
    const newIngredient = currentNumberOfType - 1;
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = newIngredient;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice,
    });
}
  };
  render() {
      const disabledInfo = {
          ...this.state.ingredients,
      }
      for (let key in disabledInfo){
          disabledInfo[key] = disabledInfo[key] <= 0
      }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          moreClick={this.addIngredientHandler}
          lessClick={this.removeIngredientHandler}
          disabled={disabledInfo}
          totalPrice= {this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
