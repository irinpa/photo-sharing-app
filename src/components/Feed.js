import React from 'react';
import Posts from './Posts';
import Users from './Users';
import Spinner from './Spinner';

export default function Feed() {
    return (
        <div className="container feed">
            <Posts/>
            <Users/>
        </div>
    )
}