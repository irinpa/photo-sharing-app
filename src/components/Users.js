import React, {Component} from "react";
import User from "./User";
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';

export default class Users extends Component {

  InstaService = new InstaService();

  state = {
    users: [],
    error: false
  }

  componentDidMount() {
    this.updateUsers();
  }

  updateUsers() {
    this.InstaService.getAllUsers()
    .then(this.onUsersLoaded)
    .catch(this.onError)
  }

  onUsersLoaded = (users) => {
    this.setState = {
      users,
      error: false
    }
    console.log('USERS', users);
  }

  onError = (err) => {
    this.setState({
      error: true
  })
  }

  
  render() {
    return (
      <div className="right">
        <User
          src="https://www.pureconcepts.com.mt/wp-content/uploads/2017/04/person-4.jpg"
          name="Elizabeth"
        />

        <div className="users__block">
          <User
            src="https://www.pureconcepts.com.mt/wp-content/uploads/2017/04/person-4.jpg"
            name="Elizabeth"
            min
          />
    
        </div>
      </div>
    );
  }
}
