import React, { Component } from 'react'

class SubscriptionPricing extends Component {
    render(){
        return (
            <div class="pricing-option">
                <div class="subs-title">
                    <div>
                        {this.props.type}
                    </div>
                </div>
                <div class="subs-body">
                    ${this.props.price} <sub>/mo</sub>   
                    <p>{this.props.users} users included<br/>
                    {this.props.storage}GB of storage<br/>
                    Help center access<br/>
                    {this.props.support} support</p>
                    <button>{this.props.button}</button>
                </div>
            </div>
        )
    }
}

export default SubscriptionPricing