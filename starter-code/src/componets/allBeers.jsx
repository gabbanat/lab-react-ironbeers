import React, { Component } from 'react';
import Axios from "axios"
import {Link} from "react-router-dom"
class allBeers extends Component {
    state = {
        img: "",
        games: []
    }
    componentDidMount() {
        Axios.get("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15").then((result) => {
            
        
    
    
    
        console.log(result)
        this.setState({games: result.data})
            
        });

    }
showGames = () => {
 let gameList = this.state.games.map(eachGame => {
    return <li>
    <h4>{eachGame.internalName}</h4>
    <img src={eachGame.thumb}/>
    <h4>${eachGame.salePrice}</h4>
    <Link to ={`/deal/${eachGame.dealID}`}> Deal </Link>
    </li>

 })
 return gameList
}
    render() {
        return (
            <div>
            {this.showGames()}   
            </div>
        );
    }
}

export default allBeers;