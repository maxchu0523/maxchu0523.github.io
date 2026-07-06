import { useEffect, useState } from 'react';

export type ThemeChoice = 'system' | 'dark' | 'light';
export type Theme = 'dark' | 'light';

function resolve(choice: ThemeChoice): Theme {
  if (choice === 'system') {
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  return choice;
}

/**
 * Manages the color theme. Writes the resolved theme to
 * `document.documentElement[data-theme]`, which the CSS token sets key off,
 * and follows the OS setting while the choice is "system".
 */
export function useTheme(initial: ThemeChoice = 'dark') {
  const [choice, setChoice] = useState<ThemeChoice>(initial);
  const [theme, setTheme] = useState<Theme>(() => resolve(initial));

  useEffect(() => {
    const resolved = resolve(choice);
    setTheme(resolved);
    document.documentElement.setAttribute('data-theme', resolved);
  }, [choice]);

  useEffect(() => {
    if (choice !== 'system' || !window.matchMedia) return;
    const mql = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = () => {
      const resolved = resolve('system');
      setTheme(resolved);
      document.documentElement.setAttribute('data-theme', resolved);
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [choice]);

  return { choice, theme, setChoice };
}
