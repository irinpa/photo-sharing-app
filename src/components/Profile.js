import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {

    return (
        <div className="container profile">
            <User
            src="https://images.unsplash.com/photo-1571630811659-e13c81d94e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
            alt="aaa"
            name="All unsorted photos here:"/>
            <Palette/>

        </div>
    )

}

export default Profile;