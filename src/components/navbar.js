import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div classNmae="navbar-logo">
        GURU's DAILY QUOTE
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Quote</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>
    </div>
  )
}
