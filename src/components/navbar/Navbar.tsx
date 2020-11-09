import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { BsSearch} from 'react-icons/bs';
import { FaShoppingBag, FaUserAlt } from 'react-icons/fa';

import logoImg from '../../images/logo.svg'

function Navbar() {
  const linkStyle = { textDecoration: "none" }
  return (
    <div className="Navbar">
      <img src={logoImg} alt="Logo" />
      <nav>
        <ul>
          <Link style={linkStyle} to="/"><li>Início</li></Link>
          <Link style={linkStyle} to="#"><li>Produtos</li></Link>
          <Link style={linkStyle} to="#"><li>Manifesto</li></Link>
          <Link style={linkStyle} to="#"><li>Assinaturas</li></Link>
        </ul>

        <form className="form">
        <input className="search" type="text" placeholder=" O que você procura?" aria-label="Search"/>
        <button id="btn" type="submit">
        <BsSearch size={18} color="black"/>
        </button>
        </form>
        <Link to="#" className="user">
          <FaUserAlt size={25}/>
        </Link>
        <Link to="#" className="shop">
        <FaShoppingBag size={25}/>
        </Link>
      </nav>     
    </div>
  );
}

export default Navbar;
