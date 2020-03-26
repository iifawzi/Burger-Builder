import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import axios from "../../axios-orders"
import Spinner from "../../components/UI/Spinner/Spinner"
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
const INGREDIENT_PRICES = {
    Salad : 0.5,
    Cheese: 0.4,
    Meat: 1.3,
    Bacon: 0.7,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice : 4,
  purchaseable: true,
  purchasing: false,
  loading: false,
  error: false,
  };
  componentDidMount(){
    axios.get("https://reactt-my-burger.firebaseio.com/ingredients.json").then(response=>{
      this.setState({ingredients:response.data});
    }).catch(err=>{
     this.setState({error:true})
    })
  }

  purchaseHandler = ()=>{
      this.setState({purchasing:true});
  }

  updatePurchaseState (ingredients){
      const sum = Object.keys(ingredients).map(
          igKey=>{
              return ingredients[igKey];
          }
      ).reduce((sum,el)=>{
          return sum+el;
      },0);
     this.setState({purchaseable: sum <= 0}); 
  }

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
    this.updatePurchaseState(updatedIngredient);
  };
  removeIngredientHandler = type => {
    const ingredients = this.state.ingredients;
    const currentNumberOfType = ingredients[type];
    if (currentNumberOfType <= 0){
        return;
    }
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
    this.updatePurchaseState(updatedIngredient);
  };

  purchaseCancelHandler = ()=>{
      this.setState({purchasing: false});
  }

  purchaseContinueHandler = ()=>{


    const queryParams = [];
    for (let i in this.state.ingredients){
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&');
this.props.history.push({
  pathname: '/checkout',
  search: '?' + queryString,
});
  }

  render() {
      const disabledInfo = {
          ...this.state.ingredients,
      }
      for (let key in disabledInfo){
          disabledInfo[key] = disabledInfo[key] <= 0
      }
 
let burger =this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
let OrderSummmary = null;
      if (this.state.ingredients){
        burger = (
          <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            moreClick={this.addIngredientHandler}
            lessClick={this.removeIngredientHandler}
            disabled={disabledInfo}
            totalPrice= {this.state.totalPrice}
            ordered={this.purchaseHandler}
            purchaseable={this.state.purchaseable}
          />
          </Aux>
        );
        OrderSummmary = < OrderSummary
      price={this.state.totalPrice.toFixed(2)}
      purchaseCancelled={this.purchaseCancelHandler}
      purchaseContinued={this.purchaseContinueHandler}
      ingredients={this.state.ingredients} />
      }
      if (this.state.loading){
        OrderSummmary = <Spinner />;
      }
    return (
      <Aux>
          <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {OrderSummmary}
          </Modal>
       {burger}
      </Aux>
    );
  }
}

export default WithErrorHandler(BurgerBuilder,axios);
