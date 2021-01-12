import React, { Component } from 'react';
import Slideshow from './carousel';
import "./home.css"
import {Link} from "react-router-dom"


export class Home extends Component {
    state={
        categories:[],
    }
    //fetching products Categories data from API and setting the state!
   async componentWillMount(){
        let data= await fetch("https://fakestoreapi.com/products/categories")
        data= await data.json()
        this.setState({
            categories:data
        })
       
    }
    render() {
        console.log(this.props)
        let data=this.state.categories.map((value,index)=>{
            return(
                <Link to={`/products/${value}`}>              
                <div className="category-container" key={index}>
                <img className="categories-img"src={`image/${value.split(" ").join("")}.png` }/>
                <p>{value.toUpperCase()}</p>
                </div>
                </Link>
            )
        })
        return (
            <div>
            <Slideshow/>
            <div className="categories">
            {data}
            </div>
            </div>
        )
    }
}

export default Home;
