import React, { Component } from 'react'
import Subscribers from './Subscribers';
import Subscription from './Subscription';

class Content extends Component {

    getRenderComponent(renderComponent) {
        if (renderComponent == 'subscription')
            return <Subscription />;
        return <Subscribers />    
    }

    render() {
        return <div>
                {this.getRenderComponent(this.props.component)}
            </div>;
    }
}

export default Content