import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Cartcontext';

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <header className="header">
      <h1>E-Shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
