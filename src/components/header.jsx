import React, { useState } from 'react'
import { routes } from '../router/routes';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
        <div className="container">
        <a href="/" className="logo">Nazir travel</a>
        <div className="header__list">
            {
                routes.filter((route)=>route.name).map((route,index)=><li key={index}><NavLink to={route.url} className="header__link">{route.name}</NavLink></li>)
            }
        </div>
        </div>
    </header>
  )
}

export default Header