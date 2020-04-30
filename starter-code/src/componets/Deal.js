import React, { Component } from 'react';
import Axios from "axios"

class Deal extends Component {
    state = {
        deal:{}
    }
    componentDidMount(){
        Axios.get(`https://www.cheapshark.com/api/1.0/deals?id=${this.props.match.params.id}`).then(res =>{
                this.setState({deal:res.data})
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
               <h4>{this.state.deal.gameInfo?.name}</h4>
               <img src={this.state.deal.gameInfo?.thumb}/>
            </div>
        );
    }
}

export default Deal;
