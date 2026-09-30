export function somar(a: number, b: number): number {
  return a + b;
}

export function dividir(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Divisão por zero');
  }
  return a / b;
}
