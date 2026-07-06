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
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentIndex = OPTIONS.findIndex((o) => o.value === value);
  const current = OPTIONS[currentIndex] ?? OPTIONS[0];

  // On open, start from the current selection; on close, nothing to track.
  useEffect(() => {
    if (open) setActiveIndex(currentIndex < 0 ? 0 : currentIndex);
  }, [open, currentIndex]);

  // Move DOM focus to the active option so the listbox behaves like one.
  useEffect(() => {
    if (open) optionRefs.current[activeIndex]?.focus();
  }, [open, activeIndex]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  const close = (returnFocus = true) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  };

  const selectIndex = (index: number) => {
    onChange(OPTIONS[index].value);
    close();
  };

  const onTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % OPTIONS.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + OPTIONS.length) % OPTIONS.length);
        break;
      case 'Home':
        e.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setActiveIndex(OPTIONS.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        selectIndex(activeIndex);
        break;
      case 'Escape':
        e.preventDefault();
        close();
        break;
      case 'Tab':
        close(false);
        break;
    }
  };

  return (
    <div ref={rootRef} className={styles.root}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Color mode"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onTriggerKeyDown}
      >
        <span className={styles.mark}>{current.mark}</span>
        <span>{current.label}</span>
        <span className={`${styles.chev}${open ? ` ${styles.chevOpen}` : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <ul
          className={styles.menu}
          role="listbox"
          aria-label="Color mode"
          onKeyDown={onMenuKeyDown}
        >
          {OPTIONS.map((o, i) => (
            <li key={o.value}>
              <button
                ref={(el) => {
                  optionRefs.current[i] = el;
                }}
                type="button"
                role="option"
                aria-selected={o.value === value}
                tabIndex={i === activeIndex ? 0 : -1}
                className={`${styles.option}${o.value === value ? ` ${styles.optionActive}` : ''}`}
                onClick={() => selectIndex(i)}
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
