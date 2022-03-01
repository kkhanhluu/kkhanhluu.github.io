import { HeaderNavItem } from 'components/Header/NavItem';
import * as React from 'react';
import * as styles from './menu.module.scss';

export const Menu: React.FunctionComponent = () => {
  function handleCheckBoxChanged() {
    document.body.classList.toggle('blur');
  }

  React.useEffect(() => {
    return () => {
      document.body.classList.remove('blur');
      (document.getElementById('navigation-toggle') as HTMLInputElement).checked = false;
    };
  });
  return (
    <div className={styles.menu}>
      <input
        type="checkbox"
        onChange={handleCheckBoxChanged}
        className={styles.navigationCheckbox}
        id="navigation-toggle"
      />

      <label htmlFor="navigation-toggle" className={styles.burgerButton}>
        <span className={styles.navigationIcon}></span>
      </label>
      <aside>
        <nav className={styles.nav}>
          <ul className={styles.navigationList}>
            <HeaderNavItem isMounted index={1} title="Blogs" to="/" />
            <HeaderNavItem isMounted index={2} title="About" to="/about" />
            <a
              href="https://kkhanhluu.github.io/assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: '500ms' }}
              className="resume fadedown-enter-active"
            >
              <button>Resume</button>
            </a>
          </ul>
        </nav>
      </aside>
    </div>
  );
};
