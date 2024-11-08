import React from 'react';
import header_logo from '../../assets/img/header_logo.svg';

export const Header = () => {
  return (
    <section>
      <div className="container">
        <img src={header_logo} alt="img" />
        <button className='btn_header'>Katalog</button>
      </div>
    </section>
  )
}

