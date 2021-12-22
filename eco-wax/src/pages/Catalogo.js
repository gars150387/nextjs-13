import React from 'react'
import { CatalogoPDF } from '../components/CatalogoPDF'
import { Footer } from '../components/Footer'
import { NavbarMain } from '../components/Navbar'

export const Catalogo = () => {
    return (
        <>
            <NavbarMain />
            <CatalogoPDF />
            <Footer/>
        </>
    )
}