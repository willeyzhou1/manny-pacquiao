import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
      <nav class='box-border sticky border-3 border-solid border-black mx-auto my-0'>
        <ul class='list-none flex justify-evenly'>
            <li>
                <Link to='/' class='text-xl no-underline text-black hover:text-gray-400'>HOME</Link>
            </li>
            <li>
                <Link to='/fights' class='text-xl no-underline text-black hover:text-gray-400'>PACQUIAO'S FIGHTS</Link>
            </li>
            <li>
                <Link to='/contact' class='text-xl no-underline text-black hover:text-gray-400'>CONTACT</Link>
            </li>
        </ul>
      </nav>
    );
}
