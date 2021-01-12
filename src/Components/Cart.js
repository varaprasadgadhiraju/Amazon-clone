import React, { Component } from 'react';
import  "./Cart.css";
import ls from "local-storage"
//creating a Cart component!
export class Cart extends Component {
        state={
            Total_price:0
        }
        componentWillMount(){
            let total_price=JSON.parse(ls.get("cartdata"))
            let count=0;
            for(let i=0;i<total_price.length;i++){
                count+=total_price[i].price
            }
            this.setState({Total_price:count})
        }

    render(){
        //getting the cart data from ls
        let cart_data=JSON.parse(ls.get("cartdata"))
        //displaying cart data using map!
        let display_data=cart_data.map((cart,index)=>{
            return(
                <div className="cart-post" key={index}>
                <img src={cart.image} width="200px" height="220px"/>
                <div className="cart-details">
                <div>
                <h2 className="cart-title">{cart.title}</h2></div>
                <div>
                <h3 className="cart-price">₹{cart.price}</h3></div>
                </div>
                </div>
            )
        })
        return (
            <div className="display">
            <div className="left-view">
            <div className="left-view-heading">
            <h1 className="shopping" >Shopping Cart</h1>
            <strong><p>Price</p></strong>
            </div>
            <div className="display-data">
            {display_data}
            </div>
            </div>
            <div className="right-view">
            <div className="total-price">
           <p>Total Price:₹<b>{this.state.Total_price}</b></p> 
            <button>Proceed to buy</button>
            </div>
            </div>
            </div>
        )
    }
}

export default Cart
