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
    this.setState({
      users,
      error: false
    })

    console.log('users state', this.state)

  }

  onError = (err) => {
      this.setState({
        error: true
      })
  }

  renderUsers(arr) {
    return arr.map(item => {
        const {id, name, photo, alt} = item; //to avoid using 'item.name', 'item.photo', etc.

        return (
          <div className="user min" key={id}>
            <User               
                 src={photo} 
                 alt={alt} 
                 name={name}
            />
          </div>
        );
    })
  }

  
  render() {
    const {error, users} = this.state;
    console.log()

    if (error) {
        return <ErrorMessage/>
    }

    const userItems = this.renderUsers(users);

    return(
      <div className="right">
        <User
          src="https://www.pureconcepts.com.mt/wp-content/uploads/2017/04/person-4.jpg"
          name="Elizabeth"
        />

        <div className="users__block">
          {userItems}
        </div>
      </div>
    ) 
  }
}
