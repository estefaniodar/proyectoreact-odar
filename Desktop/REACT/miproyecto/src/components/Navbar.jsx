
import React from 'react'
import miLogo from '../imagenes/logo.jpeg'
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to='/category/logo'>
                <img src={miLogo} alt="Logo" height="50" width="100"></img>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-gray-900" to='/'>HOME</Link>
                    <Link className="mr-5 hover:text-gray-900" to='/category/CHERIMOYA'>CHERIMOYA</Link>
                    <Link className="mr-5 hover:text-gray-900" to='/category/MELINE'>MELINE</Link>
                    <Link className="mr-5 hover:text-gray-900" to='/category/NAIL ART'>NAIL ART</Link>
                </nav>
                <li className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                   <CartWidget></CartWidget> 

                </li>
            </div>
        </header>
    )
}

export default Navbar