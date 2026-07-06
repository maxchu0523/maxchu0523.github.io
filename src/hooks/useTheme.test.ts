import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useTheme } from './useTheme';

/** Stub window.matchMedia so "system" resolves to a known preference. */
function mockPrefersLight(prefersLight: boolean) {
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: query.includes('light') ? prefersLight : false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: () => false,
  }));
}

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    mockPrefersLight(false); // system => dark by default
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('falls back to the provided default when nothing is stored', () => {
    const { result } = renderHook(() => useTheme('dark'));
    expect(result.current.choice).toBe('dark');
    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('reads the saved choice from localStorage', () => {
    localStorage.setItem('theme', 'light');
    const { result } = renderHook(() => useTheme('dark'));
    expect(result.current.choice).toBe('light');
    expect(result.current.theme).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('persists the choice when it changes', () => {
    const { result } = renderHook(() => useTheme('dark'));
    act(() => result.current.setChoice('light'));
    expect(localStorage.getItem('theme')).toBe('light');
    expect(result.current.theme).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('resolves "system" using the OS preference', () => {
    mockPrefersLight(true);
    localStorage.setItem('theme', 'system');
    const { result } = renderHook(() => useTheme('dark'));
    expect(result.current.choice).toBe('system');
    expect(result.current.theme).toBe('light');
  });

  it('ignores an invalid stored value', () => {
    localStorage.setItem('theme', 'purple');
    const { result } = renderHook(() => useTheme('dark'));
    expect(result.current.choice).toBe('dark');
  });
});
