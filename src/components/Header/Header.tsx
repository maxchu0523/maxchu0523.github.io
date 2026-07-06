import { useEffect, useRef } from 'react';
import type { Theme, ThemeChoice } from '../../hooks/useTheme';
import { site } from '../../data/site';
import { ThemeSelect } from './ThemeSelect';
import styles from './Header.module.css';

interface HeaderProps {
  theme: Theme;
  choice: ThemeChoice;
  onChoiceChange: (choice: ThemeChoice) => void;
}

/** Sticky header whose glass background intensifies as the page scrolls. */
export function Header({ theme, choice, onChoiceChange }: HeaderProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navRGB = theme === 'light' ? '234,238,243' : '6,13,22';
    const lineRGB = theme === 'light' ? '11,22,34' : '255,255,255';
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const nav = navRef.current;
        if (!nav) return;
        const p = Math.min(window.scrollY / 220, 1);
        nav.style.background = `rgba(${navRGB},${(p * 0.55).toFixed(3)})`;
        nav.style.setProperty('backdrop-filter', `blur(${(p * 16).toFixed(1)}px)`);
        nav.style.setProperty('-webkit-backdrop-filter', `blur(${(p * 16).toFixed(1)}px)`);
        nav.style.borderBottomColor = `rgba(${lineRGB},${(p * 0.1).toFixed(3)})`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [theme]);

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
