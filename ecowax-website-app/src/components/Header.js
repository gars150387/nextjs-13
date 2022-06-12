import React from 'react'

import '../images/background-image.jpg'

import '../styles/header.scss'

export const Header = () => {
    return (
        <div>
            <img className='logo' src={require('../images/logo-no-background.png')} />
            <div className='header-image container-fluid'></div>
        </div>
    )
}