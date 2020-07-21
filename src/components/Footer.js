import React, { Component } from 'react'
import FooterList from './FooterList'

class Footer extends Component {
    render() {
        const company = ["Team", "History", "Contact us", "Location"];
        const features = ["Cool stuff", "Random feature", "Team feature", "Developer stuff", "Another one"];
        const resources = ["Resource", "Resource name", "Another resource", "Final resource"];
        const legal = ["Privacy policy", "Terms of use"];
        return <div class='footer'>
            <FooterList listName="Company" list={company}/>
            <FooterList listName="Features" list={features}/>
            <FooterList listName="Resources" list={resources}/>
            <FooterList listName="Legal" list={legal}/>
        </div>
    }
}

export default Footer