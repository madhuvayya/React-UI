import React, { Component } from 'react'

class FooterList extends Component {
    render(){
        return <div>
            <ul className='footer-list'>
            <p className='footer-heading'>{this.props.listName}</p>
            {this.props.list.map( item => 
                { return <li key={item}><a href="">{item}</a></li> })}
            </ul>    
        </div>
    } 
}

export default FooterList;