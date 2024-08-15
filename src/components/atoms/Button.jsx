import React from 'react'
import { NavLink } from 'react-router-dom'

export const Button = ({to, children}) => {
  return (
    <NavLink to={to}>
        {children}
    </NavLink>
  )
}
