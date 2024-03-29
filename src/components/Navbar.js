import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
           <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}><h1>CELLUBYTE</h1></Link> 
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li>
                   <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
               </li>
               <li>
                   <Link to='/technology' style={{ textDecoration: 'none' }}>Technology</Link>
               </li>
               <li>
                   <Link to='/privacy' style={{ textDecoration: 'none' }}>Privacy Policy</Link>
               </li>
               <li>
                   <Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link>
               </li>
           </ul>
           <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
               
           </div>
        </div>
    )
}

export default Navbar