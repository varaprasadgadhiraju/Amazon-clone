import React, { Component } from 'react';
import "./productDetails.css";
import {
    ShoppingCartOutlined
  } from '@ant-design/icons';
import ls from "local-storage"
  

export class ProductDetails extends Component {
    state={
        product:{},
        image:"",
        title:"",
        price:""
    }
//function for adding an item to cart
AddToCart=()=>{
    let data=ls.get("cartdata")
    data=JSON.parse(data)
    data.push({
        "title":this.state.product.title,
        "image":this.state.product.image,
        "price":this.state.product.price
    })
    console.log(this.state.product.title)
    data=JSON.stringify(data)
    ls.set("cartdata",data)
    alert("Product Added To Cart!")
    this.setState({title:"",image:"",price:""})
}
//fetching product details of a product!
  async componentWillMount(){
    let data= await fetch("https://fakestoreapi.com/products/"+this.props.match.params.id)
        data=await data.json()
        console.log(data)
        this.setState({
            product:data
        })
        //storing the cart data in ls using an empty array!
        let FakeData=[]
        let cart=ls.get("cartdata")
        if(!cart){
            ls.set("cartdata",JSON.stringify(FakeData))
        }
    }
    render() {
        return (
            <div className="product-details">
               <img src={this.state.product.image}></img>
               <div className="product-information">
               <h1>{this.state.product.title}</h1>
               <p>{this.state.product.description}.</p>
               <h2>Price: <span>₹{this.state.product.price}/-</span></h2>
          <button onClick={this.AddToCart}><ShoppingCartOutlined/>  Add to Cart</button>
               </div>
            </div>
        )
    }
}

export default ProductDetails
