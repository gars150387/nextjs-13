import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { MdOutlineHighQuality, MdAttachMoney } from 'react-icons/md'
import { FaShippingFast } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='footer container-fluid'>
            <div className='footer-icons text-end'>
                <MdOutlineHighQuality style={{ color: "white", marginRight: "8px", fontSize: "35px" }} />
                <FaShippingFast style={{ color: "white", marginRight: "2px", fontSize: "35px"  }} />
                <MdAttachMoney style={{ color: "white", fontSize: "35px"  }} />
            </div>
            <div className='text-start' style={{position: "relative", bottom: "-100px"}}>
                <span>Copyright <AiOutlineCopyrightCircle /> 2021 Eco Wax | Designed by G.A.R.S</span>
            </div>
        </div>
    )
}