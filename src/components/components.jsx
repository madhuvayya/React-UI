import React, { Component } from 'react'; 

class Header extends Component {
    render() {
        return  <div class="header">
        <div class="company-name">
            Company name
        </div>
        <div class="options">
            <div><a href="#">FEATURES</a></div>
            <div><a href="#">ENTERPRISE</a></div>
            <div><a href="#">SUPPORT</a></div>    
            <div><button class="login-button">LOGIN</button></div>
        </div>    
    </div>
    }; 
}

export default Header;