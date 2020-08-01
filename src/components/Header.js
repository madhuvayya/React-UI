import React, { Component } from 'react'; 

class Header extends Component {
    render() {
        return <div className="header">
        <div className="company-name">
           <a href="/"> Company name</a>
        </div>
        <div className="options">
            <div><a onClick={this.props.updateParent}>SUBSCRIBERS</a></div>
            <div><a href="/register">REGISTER</a></div>
            <div><a href="#support">SUPPORT</a></div>       
            <div><button className="login-button">LOGIN</button></div>
        </div>        
    </div>
    }; 
}

export default Header;