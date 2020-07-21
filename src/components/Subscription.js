import React, { Component } from 'react'; 

class Subscription extends Component {
    render() {
        return <div class="subscription">
            <div class="text">
                <h2>Pricing</h2>
                <p class="text">Quickly build an effective pricing table for your potential customers with this layout.
                It's built with default Material-UI components with little customization.
                </p>
            </div>
            <div class="pricing">
                <div class="free pricing-option">
                    <div class="subs-title">
                        Free
                    </div>
                    <div class="subs-body">
                        <ul class="list">
                            <li>10 users included</li>
                            <li>2GB of storage</li>
                            <li>Help center access</li>
                            <li>Email support</li>
                        </ul>
                        <button>SIGN UP FOR FREE</button>
                    </div>
                </div>
                <div class="pro pricing-option">
                    <div class="subs-title">
                        Pro
                    </div>
                    <div class="subs-body">
                        <ul class="list">
                            <li>20 users included</li>
                            <li>10GB of storage</li>
                            <li>Help center access</li>
                            <li>Priority eamil support</li>
                        </ul>
                        <button>GET STARTED</button>
                    </div>
                </div>
                <div class="enterprise pricing-option">
                    <div class="subs-title">
                    Enterprise
                    </div>
                    <div class="subs-body">
                        <ul class="list">
                            <li>50 users included</li>
                            <li>30GB of storage</li>
                            <li>Help center access</li>
                            <li>Phone & email support</li>
                        </ul>
                        <button>CONTACT US</button>
                    </div>
                </div>
            </div>
        </div>    
    }; 
}

export default Subscription;