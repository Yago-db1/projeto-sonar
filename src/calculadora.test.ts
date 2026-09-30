import { describe, expect, it } from 'vitest';
import { dividir, somar } from './calculadora';

describe('calculadora', () => {
  it('soma dois números', () => {
    expect(somar(2, 3)).toBe(5);
  });

  it('divide dois números', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  it('lança erro ao dividir por zero', () => {
    expect(() => dividir(1, 0)).toThrow('Divisão por zero');
  });
});
