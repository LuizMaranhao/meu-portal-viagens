import Link from 'next/link';
import styles from './Layout.module.scss';
import React from 'react';

// Tipagem para os filhos do componente
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>Travel<span>Global</span></div>
          <ul className={styles.menu}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/destinos">Destinos</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.mainContent}>{children}</main>

      <footer className={styles.footer}>
        <p>&copy; 2026 TravelGlobal - Explore com elegância.</p>
      </footer>
    </div>
  );
};

export default Layout;