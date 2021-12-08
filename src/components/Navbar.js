import React from 'react'
import { Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='backdrop-filter backdrop-sepia'>
            <p class="text-center text-dark-700 text-opacity-100 text-4xl font-serif">Demo Kappes Projekt</p>
            <nav class="flex space-x-4 justify-center pt-12">
                <nav class="flex space-x-4">
                    <NavLink className='bg-green-500 hover:bg-green-700 rounded-lg m-8 text-4xl p-2 lex flex-row border-4 border-black-500 hover:border-gray-500' to="/">Home</NavLink>
                </nav>
                <nav class='flex space-x-4'>
                    <NavLink className="bg-green-500 hover:bg-green-700 rounded-lg m-8 text-4xl p-2 lex flex-row border-4 border-black-500 hover:border-gray-500" to="/einfuehrung">Einführung</NavLink>
                </nav>
                <nav class='flex space-x-4'>
                    <NavLink className="bg-green-500 hover:bg-green-700 rounded-lg m-8 text-4xl p-2 lex flex-row border-4 border-black-500 hover:border-gray-500" to="/mitm">MITM</NavLink>
                </nav>
            </nav>
        </nav>
    )
}

export default Navbar
