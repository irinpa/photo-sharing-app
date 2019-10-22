import React from 'react';
import spinner from '../Spinner-1s-200px.svg';

export default function Spinner () {
    return (
        <div className="spinner">
            <img src={spinner} alt="spinner"></img>
        </div>
    )
}