import React from 'react';

export const GifGripItem = ({ id, url, user, title}) => {

    return (
        <div key={id}>
            <h3>Title: {title}</h3>
            <img src={url} alt={url} />
            <div>User: {user}</div>
        </div>
    )
}