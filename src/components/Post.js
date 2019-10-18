import React, {Component} from 'react'; 
import User from './User';

export default class Post extends Component {
    render() {
        return(
            <div className="post"> 
                <User 
                    src="https://www.pureconcepts.com.mt/wp-content/uploads/2017/04/person-4.jpg"
                    name="Elizabeth"
                    min/>
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">
                    some post name
                </div>
                <div className="post__descr">
                    some description
                </div>
               
            </div>
        ) 
    }
}