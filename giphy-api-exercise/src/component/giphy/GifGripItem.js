import React from 'react';


export const GifGripItem = ({ url, user, title}) => {
    
//  console.log(props)
    return (
        <div id='card' className='col-6 m-auto animate__animated animate__bounceInLeft'>
            <h3>Title: {title}</h3>
            <img src={url} alt={url} />
            <div className='userTitle'>User: {user}</div>
        </div>
    )
}