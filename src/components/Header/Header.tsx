import { useEffect, useRef } from 'react';
import type { ThemeChoice } from '../../hooks/useTheme';
import { site } from '../../data/site';
import { ThemeSelect } from './ThemeSelect';
import styles from './Header.module.css';

interface HeaderProps {
  choice: ThemeChoice;
  onChoiceChange: (choice: ThemeChoice) => void;
}

/** Sticky header whose glass background intensifies as the page scrolls. */
export function Header({ choice, onChoiceChange }: HeaderProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let raf = 0;

    // Drive only the scroll-dependent alpha/blur via CSS variables; the base
    // colors live in the stylesheet (--nav-rgb / --line-rgb) so they follow
    // the theme automatically without duplicating values here.
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const nav = navRef.current;
        if (!nav) return;
        const p = Math.min(window.scrollY / 220, 1);
        nav.style.setProperty('--nav-alpha', (p * 0.55).toFixed(3));
        nav.style.setProperty('--nav-blur', `${(p * 16).toFixed(1)}px`);
        nav.style.setProperty('--line-alpha', (p * 0.1).toFixed(3));
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header ref={navRef} className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.brand}>MAX CHU</span>
        <div className={styles.right}>
          <a href={`mailto:${site.email}`} className={styles.email}>
            {site.email.toUpperCase()}
          </a>
          <ThemeSelect value={choice} onChange={onChoiceChange} />
        </div>
      </div>
    </header>
  );
}
