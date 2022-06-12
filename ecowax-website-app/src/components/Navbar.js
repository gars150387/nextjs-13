import React from 'react'

import '../styles/navbar.scss'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">EcoWax</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Catalogo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Galeria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Videos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Testimonios</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
