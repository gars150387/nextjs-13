import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { MdOutlineHighQuality, MdAttachMoney } from 'react-icons/md'
import { FaShippingFast } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='footer container-fluid'>
            <div className='footer-icons'>
                <MdOutlineHighQuality style={{ color: "white" }} />
                <FaShippingFast style={{ color: "white" }} />
                <MdAttachMoney style={{ color: "white" }} />
            </div>
            <div>
                <span>Copyright <AiOutlineCopyrightCircle /> 2021 Eco Wax | Designed by G.A.R.S</span>
            </div>
        </div>
    )
}