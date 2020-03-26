import React, {Component} from "react";
import Button from "../../../components/UI/Button/Button"
import classes from "./ContactData.module.css"
import axios from "../../../axios-orders"
import Spinner from "../../../components/UI/Spinner/Spinner"
class ContactData extends Component {
state = {
    name: '',
    email: '',
    address:{
        streat: '',
        postalCode: ''
    },
    loading:false,
}
orderHandler = (event)=>{
    event.preventDefault();
  this.setState({loading:true})
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "fawzi",
        email: "iifawzie@gmail.com",
        number: "01090243795",
        country: "egypt",
      }
    }
    axios.post("/orders.json",order).then(response=>{
      console.log(response)
    this.setState({loading:false,});
    this.props.history.push('/');

    }).catch(err=>{
      this.setState({loading:false, })
    })
}
render(){
    let form = (
        <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
        <input className={classes.Input} type="email" name="email" placeholder="Your Email"/>
        <input className={classes.Input} type="text" name="streer" placeholder="Your Street"/>
        <input  className={classes.Input}type="text" name="postal" placeholder="Your Postal Code"/>
      <Button clicked= {this.orderHandler}btnType="Success">Order</Button>
    </form>
    );
    if (this.state.loading){
        form = <Spinner />
    }
    return (
        <div className={classes.ContactData}>
            <h4>Enter Your Contact Data</h4>
           {form}
        </div>
    )
}
}


export default ContactData;