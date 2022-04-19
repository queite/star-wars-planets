import React from 'react';
import starWars from '../img/icons8-guerra-nas-estrelas.svg';

function Header() {
  return (
    <header>
      <img src={ starWars } alt="starwars-logo" />
    </header>
  );
}

export default Header;
