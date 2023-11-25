import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { IoIosMenu } from 'react-icons/io'


function Navbar() {

    const [toggle, setToggle] = useState(false)

    console.log('toggle', toggle)

    return (
        <div className='nav-cotainer'>
            {
                toggle ? (
                    <nav className='mobile-menu'>
                        <div onClick={() => setToggle(!toggle)} class="menu-close">
                            <RxCross2 className='humburger-icon' />
                        </div>
                        <ul>
                            <li onClick={() => setToggle(false)}><a href="#project">Projects</a></li>
                            <li onClick={() => setToggle(false)}><a href="#contact">Contacts</a></li>
                            <li onClick={() => setToggle(false)}><a href="#skill">Skills</a></li>
                            <li onClick={() => setToggle(false)}><a href="#socialmedia">Social Media</a></li>
                        </ul>
                    </nav>
                ) :
                    (
                        <div onClick={() => setToggle(!toggle)} class="">
                            <IoIosMenu className='humburger-icon' />
                        </div>
                    )
            }
        </div>
    )
}

export default Navbar