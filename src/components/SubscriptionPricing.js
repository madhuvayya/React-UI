import React, { Component } from 'react'

class SubscriptionPricing extends Component {
    render(){
        return (
            <div className="pricing-option">
                <div className="subs-title">
                    <div>
                        {this.props.type}
                    </div>
                </div>
                <div className="subs-body">
                    <span className='price'>${this.props.price}</span> <sub>/mo</sub>   
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