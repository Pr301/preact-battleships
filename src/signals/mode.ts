import { signal } from '@preact/signals';

type Mode = 'setup' | 'play' | 'restart';

export const mode = signal<Mode>('setup');

export function changeMode(value: Mode) {
  mode.value = value;
}
