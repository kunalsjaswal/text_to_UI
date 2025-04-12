import React from 'react'
import { NavbarDiv } from './style'
import logoImg from '../../../images/bot.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <NavbarDiv>
        <aside className="co-name">
            <img src={logoImg} alt="logo" />
            <h2>MEET - TO - UI</h2>
        </aside>

        <ul>
          {/* <li style={{cursor:"pointer"}}>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li style={{cursor:"pointer"}}>
            <NavLink to="documentation">DOCS</NavLink>
          </li>
          <li>
            <NavLink to="#docs-section">LOGIN</NavLink>
          </li>
          <li className='try-free'>
            <NavLink to="/playground">TRY FOR FREE</NavLink>
          </li> */}
        </ul>
    </NavbarDiv>
  )
}

export default Navbar