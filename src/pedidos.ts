// A senha vem do ambiente, nunca do código
export function conectar(): string {
  const password = process.env.DB_PASSWORD;
  if (!password) {
    throw new Error('DB_PASSWORD não definida');
  }
  return `db://admin:${password}@localhost`;
}

// Cada função pequena cuida de um tipo, o que mantém a complexidade baixa
function descontoTipoA(valor: number, vip: boolean, cupom: boolean): number {
  if (vip && cupom) {
    if (valor > 100) return 30;
    return valor > 50 ? 20 : 10;
  }
  if (vip) return valor > 100 ? 20 : 5;
  if (cupom) return valor > 100 ? 15 : 8;
  return 0;
}

function descontoTipoB(vip: boolean, cupom: boolean): number {
  if (vip && cupom) return 12;
  return vip || cupom ? 6 : 0;
}

export function calcularDesconto(
  tipo: string,
  valor: number,
  vip: boolean,
  cupom: boolean,
): number {
  if (tipo === 'A') return descontoTipoA(valor, vip, cupom);
  if (tipo === 'B') return descontoTipoB(vip, cupom);
  return 0;
}

export function validar(valor: number): boolean {
  return !Number.isNaN(valor);
}

export function rotulo(status: string): string {
  return status === 'pago' ? 'OK' : 'PENDENTE';
}

// Uma única função no lugar das duas idênticas
export function gerarRelatorio(itens: number[], nome: string): string {
  let total = 0;
  const linhas: string[] = [];
  for (const item of itens) {
    total += item;
    linhas.push(`Item: ${item} | Acumulado: ${total}`);
  }
  const media = itens.length ? total / itens.length : 0;
  linhas.push(
    `Total de ${nome}: ${total}`,
    `Quantidade de itens: ${itens.length}`,
    `Média: ${media}`,
  );
  return linhas.join('\n');
}
