import React, {Component} from 'react'; 
import Post from './Post';

export default class Posts extends Component {
    render() {
        return(
            <div className="left"> 
                <Post alt="Nature" src="https://www.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"/>
            </div>
        ) 
    }
}