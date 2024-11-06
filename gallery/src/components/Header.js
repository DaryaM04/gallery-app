import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Галерея Фотографий</h1>
      <nav>
        <ul>
          <li><a href="#home">Главная</a></li>
          <li><a href="#gallery">Галерея</a></li>
          <li><a href="#about">О Нас</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;