import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-light navbar-fixed-top'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src='/images/logo.png' height='30' alt='Logo Minhas Séries'/>
          </Link>

          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbar'>
            <ul className='nav navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/new'>Nova série</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>Sobre</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
