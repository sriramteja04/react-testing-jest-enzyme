import React from 'react';
import Logo from './../../assets/img/logo.png';

const Header = props => {
  return (
    <header className='headerComponent'>
      <div className='wrap'>
        <div className='logo'>
          <img className='logoIMG' src={Logo} alt='Logo' />
        </div>
      </div>
    </header>
  );
};

export default Header;
