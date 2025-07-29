import React from 'react';
import styles from './header-components.module.css';

import valorantLogo from '../../assets/valorant.png';


export function HeaderComponents() {
  return (
    <header>
      <nav className={styles.nav}>
        <img src={valorantLogo} alt="Valorant Logo" style={{ height: '40px', width: 'auto' }} />
        <p>Valorant wiki</p>
        <ul className='lista-links'>
          <a>Agentes</a>
          <a>Armas</a>
          <a>Mapas</a>
        </ul>
      </nav>
    </header>
  );
}