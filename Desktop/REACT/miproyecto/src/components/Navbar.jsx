/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import miLogo from '../imagenes/logo.jpeg'
import CartWidget from './CartWidget';

function Navbar() {
    return (
        <header className="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src={miLogo} alt="Logo" height="30" width="50"></img>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900" href='#'>HOME</a>
                    <a className="mr-5 hover:text-gray-900" href='#'>CONTACTO</a>
                    <a className="mr-5 hover:text-gray-900" href='#'>NOSOTROS</a>
                    <a className="mr-5 hover:text-gray-900" href='#'>NOSOTROS</a>
                    <a className="mr-5 hover:text-gray-900" href='#'>PREGUNTAS</a>
                </nav>
                <li className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                   <CartWidget></CartWidget> 

                </li>
            </div>
        </header>
    )
}

export default Navbar