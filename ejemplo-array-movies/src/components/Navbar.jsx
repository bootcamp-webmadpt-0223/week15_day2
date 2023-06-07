import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/profile">Profile</NavLink>
    </nav>
  )
}
