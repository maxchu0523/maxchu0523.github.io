import { useEffect, useState } from 'react';

export type ThemeChoice = 'system' | 'dark' | 'light';
export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

function resolve(choice: ThemeChoice): Theme {
  if (choice === 'system') {
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  return choice;
}

function isThemeChoice(value: unknown): value is ThemeChoice {
  return value === 'system' || value === 'dark' || value === 'light';
}

function readStoredChoice(fallback: ThemeChoice): ThemeChoice {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isThemeChoice(stored) ? stored : fallback;
  } catch {
    return fallback;
  }
}

/**
 * Manages the color theme. Reads the saved choice from localStorage, writes the
 * resolved theme to `document.documentElement[data-theme]` (which the CSS token
 * sets key off), persists changes, and follows the OS setting while the choice
 * is "system". The inline script in index.html applies the stored theme before
 * first paint so there's no flash on load.
 */
export function useTheme(initial: ThemeChoice = 'dark') {
  const [choice, setChoice] = useState<ThemeChoice>(() => readStoredChoice(initial));
  const [theme, setTheme] = useState<Theme>(() => resolve(choice));

  useEffect(() => {
    const resolved = resolve(choice);
    setTheme(resolved);
    document.documentElement.setAttribute('data-theme', resolved);
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Ignore write failures (e.g. private mode or storage disabled).
    }
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
