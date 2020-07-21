import React, { Component } from 'react'

class FooterList extends Component {
    render(){
        return <div>
            <ul class='footer-list'>
            <p class='footer-heading'>{this.props.listName}</p>
            {this.props.list.map((item) => 
                { return <li>{item}</li> })}
            </ul>    
        </div>
    } 
}

export default FooterList;