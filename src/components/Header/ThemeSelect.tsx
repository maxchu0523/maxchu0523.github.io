import { useEffect, useRef, useState } from 'react';
import type { ThemeChoice } from '../../hooks/useTheme';
import styles from './ThemeSelect.module.css';

const OPTIONS: { value: ThemeChoice; label: string; mark: string }[] = [
  { value: 'system', label: 'SYSTEM', mark: '◐' },
  { value: 'light', label: 'LIGHT', mark: '◑' },
  { value: 'dark', label: 'DARK', mark: '●' },
];

interface ThemeSelectProps {
  value: ThemeChoice;
  onChange: (value: ThemeChoice) => void;
}

/** Custom dropdown for color mode — replaces the unstyleable native select. */
export function ThemeSelect({ value, onChange }: ThemeSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = OPTIONS.find((o) => o.value === value) ?? OPTIONS[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={styles.root}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Color mode"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.mark}>{current.mark}</span>
        <span>{current.label}</span>
        <span className={`${styles.chev}${open ? ` ${styles.chevOpen}` : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <ul className={styles.menu} role="listbox" aria-label="Color mode">
          {OPTIONS.map((o) => (
            <li key={o.value}>
              <button
                type="button"
                role="option"
                aria-selected={o.value === value}
                className={`${styles.option}${o.value === value ? ` ${styles.optionActive}` : ''}`}
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
              >
                <span className={styles.mark}>{o.mark}</span>
                <span>{o.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
