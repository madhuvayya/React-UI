import React, { Component } from 'react'; 

class Header extends Component {
    render() {
        return <div class="header">
        <div class="company-name">
            Company name
        </div>
        <div class="options">
            <div><a onClick={this.props.updateParent}>SUBSCRIBERS</a></div>
            <div><a href="/register">REGISTER</a></div>
            <div><a href="#support">SUPPORT</a></div>       
            <div><button class="login-button">LOGIN</button></div>
        </div>        
    </div>
    }; 
}

export default Header;