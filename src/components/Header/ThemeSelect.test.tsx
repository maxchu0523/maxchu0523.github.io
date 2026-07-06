import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ThemeSelect } from './ThemeSelect';

describe('ThemeSelect', () => {
  it('opens and selects an option with the keyboard', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ThemeSelect value="dark" onChange={onChange} />);

    const trigger = screen.getByRole('button', { name: /color mode/i });
    await user.click(trigger);

    expect(screen.getByRole('listbox')).toBeInTheDocument();

    // 'dark' is the active option (last); ArrowDown wraps to 'system' (first).
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');

    expect(onChange).toHaveBeenCalledWith('system');
    // Menu closes after selection.
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('opens from the trigger with the arrow keys', async () => {
    const user = userEvent.setup();
    render(<ThemeSelect value="dark" onChange={vi.fn()} />);

    screen.getByRole('button', { name: /color mode/i }).focus();
    await user.keyboard('{ArrowDown}');

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });
});
