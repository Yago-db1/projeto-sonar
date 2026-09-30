import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  calcularDesconto,
  conectar,
  gerarRelatorio,
  rotulo,
  validar,
} from './pedidos';

describe('conectar', () => {
  afterEach(() => vi.unstubAllEnvs());

  it('monta a string de conexão com a senha do ambiente', () => {
    vi.stubEnv('DB_PASSWORD', 'segredo');
    expect(conectar()).toBe('db://admin:segredo@localhost');
  });

  it('lança erro se a senha não estiver definida', () => {
    vi.stubEnv('DB_PASSWORD', '');
    expect(() => conectar()).toThrow('DB_PASSWORD não definida');
  });
});

describe('calcularDesconto', () => {
  it.each([
    ['A', 150, true, true, 30],
    ['A', 80, true, true, 20],
    ['A', 10, true, true, 10],
    ['A', 150, true, false, 20],
    ['A', 10, true, false, 5],
    ['A', 150, false, true, 15],
    ['A', 10, false, true, 8],
    ['A', 10, false, false, 0],
    ['B', 10, true, true, 12],
    ['B', 10, true, false, 6],
    ['B', 10, false, true, 6],
    ['B', 10, false, false, 0],
    ['C', 10, true, true, 0],
  ])(
    'tipo %s, valor %i, vip %s, cupom %s => %i',
    (tipo, valor, vip, cupom, esperado) => {
      expect(calcularDesconto(tipo, valor, vip, cupom)).toBe(esperado);
    },
  );
});

describe('validar', () => {
  it('aceita números e rejeita NaN', () => {
    expect(validar(10)).toBe(true);
    expect(validar(NaN)).toBe(false);
  });
});

describe('rotulo', () => {
  it('diferencia pago de pendente', () => {
    expect(rotulo('pago')).toBe('OK');
    expect(rotulo('aberto')).toBe('PENDENTE');
  });
});

describe('gerarRelatorio', () => {
  it('soma os itens e calcula a média', () => {
    const texto = gerarRelatorio([10, 20], 'Ana');
    expect(texto).toContain('Total de Ana: 30');
    expect(texto).toContain('Quantidade de itens: 2');
    expect(texto).toContain('Média: 15');
  });

  it('retorna média 0 quando não há itens', () => {
    expect(gerarRelatorio([], 'Ana')).toContain('Média: 0');
  });
});
