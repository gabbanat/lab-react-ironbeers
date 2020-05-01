import React, { Component } from 'react';
import Axios from "axios"
import stores from '../stores'
console.log(stores)

class Deal extends Component {
    state = {
        deal:{},
        store:{}
    }
    componentDidMount(){
        console.log(this)
        Axios.get(`https://www.cheapshark.com/api/1.0/deals?id=${this.props.match.params.id}`).then(res =>{
            
            let store = stores.find(store => {
               
                console.log(store,res.data.gameInfo.storeID)
                return store.storeID === res.data.gameInfo.storeID
            })  
            this.setState({deal:res.data, store: store})
        })
        
    }
    getStore = () => {}
    
    render() {
        console.log(this)
        return (
            <div>
               <h4>{this.state.deal.gameInfo?.name}!!!!!!s</h4>
               <img src={this.state.deal.gameInfo?.thumb}/>
               <h4>Retail Price ${this.state.deal.gameInfo?.retailPrice}</h4>
               <h4>Sale Price ${this.state.deal.gameInfo?.salePrice}</h4>
               <h4>MetaCritic Socre:{this.state.deal.gameInfo?.metacriticScore}</h4>
               <h4>Steam Score: {this.state.deal.gameInfo?.steamRatingText}</h4>
               <h4>Number of Steam Rating {this.state.deal.gameInfo?.steamRatingCount}</h4>
               <h3>{this.state.store?.storeName}</h3> 
               {this.state.store.images ? 
                <img src={`https://www.cheapshark.com${this.state.store?.images?.banner}`} />
               : 
               ''
               }
              
            </div>
        );
    }
}

export default Deal;
