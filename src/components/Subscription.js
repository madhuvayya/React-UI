import React, { Component } from 'react'; 
import SubscriptionPricing from './SubscriptionPricing'  

class Subscription extends Component {
    render() {
        return <div class="subscription">
            <div class="content">
                <p class='text-heading'>Pricing</p>
                <p class="text">Quickly build an effective pricing table for your potential customers with this layout.
                It's built with default Material-UI components with little customization.
                </p>
            </div>
            <div class="pricing">
                <SubscriptionPricing price='0' type="Free"  users='10' storage='2' support='Email' button='SIGN UP FOR FREE' />
                <SubscriptionPricing price='15' type="Pro"  users='20' storage='10' support='Priority eamil' button='GET STARTED' />
                <SubscriptionPricing price='30' type="Enterprise"  users='50' storage='30' support='Phone & email' button='CONTACT US' />
            </div>
        </div>    
    }; 
}

export default Subscription;