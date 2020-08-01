import React,{Component} from 'react';
import Header from './Header'

class Register extends Component {
  render() {
    return (
    <div className="register">              
        <div><Header /></div>      
        <div className="form-class">
            <h2>Register</h2>
            <form>
                <table>
                    <tr>
                    </tr>
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" name="firstname" placeholder="Firstname" required/></td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td><input type="text" name="lastname" placeholder="Lastname" required/></td>
                    </tr>
                    <tr>
                        <td>Phone No:</td>
                        <td><input type="text" name="phonenumber" placeholder="Phonenumber" required/></td>
                    </tr>
                    <tr>
                        <td>Email ID:</td>
                        <td>
                            <input type="text" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><label>
                            <input type="password" name="password" placeholder="Password" required/>
                    </label></td>
                    </tr>
                </table>
                <br/>
                <input align="center" type="submit" value="Register" />
            </form> 
        </div>
    </div>
    );
  }
}

export default Register;