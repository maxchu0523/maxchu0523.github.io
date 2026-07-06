import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the core landmarks with a single banner', () => {
    render(<App />);

    // Exactly one banner landmark (the header) — Hero was demoted to a section.
    expect(screen.getAllByRole('banner')).toHaveLength(1);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    // Key content is present.
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /color mode/i })).toBeInTheDocument();
  });
});
