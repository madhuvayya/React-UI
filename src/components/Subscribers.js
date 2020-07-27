import React, { Component } from 'react'

class Subscribers extends Component {

    constructor(props){
        super(props)
        this.state = { subscribersList : [
            {
                name:'madhu',
                mobileNumber:'768123456',
                email:'madhu@gmail.com',
                subscription:'Free'
            },
            {
                name:'jayanth',
                mobileNumber:'12345678',
                email:'jayanth@gmail.com',
                subscription:'Pro'
            },
            {
                name:'trinath',
                mobileNumber:'7689463464',
                email:'tinath468@yahoo.com',
                subscription:'Enterprise'
            },
            {
                name:'tarun',
                mobileNumber:'1563134564',
                email:'tarun.123@gmail.com',
                subscription:'Free'
            }
        ]} 
    }

    getTableHeaders() {
        let header = Object.keys(this.state.subscribersList[0])
        console.log(header);
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
       })
    }

    getData = () => {
        return this.state.subscribersList.map( subscriber => {
            const { name, mobileNumber, email, subscription } = subscriber //destructuring
            return (
               <tr key={email}>
                  <td>{name}</td>
                  <td>{mobileNumber}</td>
                  <td>{email}</td>
                  <td>{subscription}</td>
               </tr>
            )
         })
    }

    render() {
        return <div>
                <h2 id='title'>Subsribers List</h2>
                 <table className='subscribers'>
                <tbody>
                  <tr>{this.getTableHeaders()}</tr>
                  {this.getData()}
               </tbody>
            </table>
            <hr/>
         </div>
    }
}

export default Subscribers