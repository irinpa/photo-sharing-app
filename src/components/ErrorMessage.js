import React from 'react';
import img from '../error.png';

const ErrorMessage = () => {
    return (
        // fragment syntax
        <>
            <img src={img} alt='Error'></img>
        </>
    )
}

export default ErrorMessage;
