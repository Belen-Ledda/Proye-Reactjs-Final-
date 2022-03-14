import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <ul>
      <li><NavLink to="/category/plantas">Plantas</NavLink></li>
      <li><NavLink to="/category/tierra">Tierra</NavLink></li>
      <li><NavLink to="/category/accesorios">Accesorios</NavLink></li>
      <li><a href="#"><CartWidget /></a></li>
    </ul>
  );
};
