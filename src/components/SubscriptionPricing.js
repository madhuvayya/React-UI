import React, { Component } from 'react'

class SubscriptionPricing extends Component {
    render(){
        return (
            <div class="pricing-option">
                <div class="subs-title">
                    {this.props.type}
                </div>
                <div class="subs-body">
                    ${this.props.price} <sub>/mo</sub>    
                    <p>{this.props.users} users included</p>
                    <p>{this.props.storage}GB of storage</p>
                    <p>Help center access</p>
                    <p>{this.props.support} support</p>
                    <button>{this.props.button}</button>
                </div>
        </div>
        )
    }
}

export default SubscriptionPricing