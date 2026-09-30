// PROBLEMAS PLANTADOS DE PROPÓSITO PARA ESTUDO DO SONAR
// (a senha abaixo é falsa)

// Problema 1: credencial fixa no código
const password = 'admin123';

export function conectar(): string {
  return `db://admin:${password}@localhost`;
}

// Problema 2: complexidade cognitiva alta (ifs aninhados)
export function calcularDesconto(
  tipo: string,
  valor: number,
  vip: boolean,
  cupom: boolean,
): number {
  let desconto = 0;
  if (tipo === 'A') {
    if (vip) {
      if (cupom) {
        if (valor > 100) {
          desconto = 30;
        } else {
          if (valor > 50) {
            desconto = 20;
          } else {
            desconto = 10;
          }
        }
      } else {
        if (valor > 100) {
          desconto = 20;
        } else {
          desconto = 5;
        }
      }
    } else {
      if (cupom) {
        if (valor > 100) {
          desconto = 15;
        } else {
          desconto = 8;
        }
      }
    }
  } else if (tipo === 'B') {
    if (vip && cupom) {
      desconto = 12;
    } else if (vip || cupom) {
      desconto = 6;
    }
  }
  return desconto;
}

// Problema 3: comparação de um valor com ele mesmo
export function validar(valor: number): boolean {
  if (valor !== valor) {
    return false;
  }
  return true;
}

// Problema 4: os dois ramos do if fazem a mesma coisa
export function rotulo(status: string): string {
  if (status === 'pago') {
    return 'OK';
  } else {
    return 'OK';
  }
}

// Problema 5: código duplicado (mesmo corpo nas duas funções)
export function relatorioCliente(itens: number[], nome: string): string {
  let total = 0;
  const linhas: string[] = [];
  for (const item of itens) {
    total += item;
    linhas.push(`Item: ${item} | Acumulado: ${total}`);
  }
  linhas.push(`Total de ${nome}: ${total}`);
  linhas.push(`Quantidade de itens: ${itens.length}`);
  linhas.push(`Média: ${itens.length ? total / itens.length : 0}`);
  return linhas.join('\n');
}

export function relatorioFornecedor(itens: number[], nome: string): string {
  let total = 0;
  const linhas: string[] = [];
  for (const item of itens) {
    total += item;
    linhas.push(`Item: ${item} | Acumulado: ${total}`);
  }
  linhas.push(`Total de ${nome}: ${total}`);
  linhas.push(`Quantidade de itens: ${itens.length}`);
  linhas.push(`Média: ${itens.length ? total / itens.length : 0}`);
  return linhas.join('\n');
}

// Problema 6: código comentado
// const antigo = calcularDesconto('A', 10, true, false);
// console.log(antigo);
