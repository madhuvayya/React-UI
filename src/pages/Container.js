import React, { Component } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

class Container extends Component {
    constructor(){
        super()
        this.state={
            component:'subscription'
        }
        // this.updateComponent = this.updateComponent.bind(this);
    }

    updateComponent = () => {
        this.setState({
            component:'subscribers'
        })
    }

    render() {
        return  <div id="container">
        <Header updateParent={this.updateComponent}/>
        <div className='sub-container'> 
          <Content component={this.state.component}/>
          <Footer />
        </div>
      </div>
    }
}

export default Container
