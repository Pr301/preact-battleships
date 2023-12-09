import { createContext } from 'preact';

export const BoardContext = createContext<'defence' | 'attack'>('defence');
