import React from "react";
import { ModalTrigger } from "../components/ModalTrigger";
import { NavbarMain } from "../components/Navbar";
import {Footer} from '../components/Footer'

export const Inicio = () => {
    return (
        <div>
            {/* <NavbarMain /> */}
            <img className="w-100" src="https://media0.giphy.com/media/FMsbSSjEe0N6zH7K7x/giphy.gif?cid=790b7611d71857a984c6a5e0cd02a27215263df12952d22f&rid=giphy.gif&ct=g"
                allowFullScreen>
            </img>
            <ModalTrigger />
            {/* <Footer /> */}
        </div>
    )
}