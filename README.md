# projeto-sonar

Projeto de estudo: qualidade de código automatizada com ESLint, Prettier, Vitest, Husky e SonarCloud.

## Comandos

| Comando                 | O que faz                                        |
| ----------------------- | ------------------------------------------------ |
| `npm run lint`          | Roda o ESLint                                    |
| `npm run format:check`  | Confere a formatação com o Prettier              |
| `npm run typecheck`     | Confere os tipos com o TypeScript                |
| `npm test`              | Roda os testes                                   |
| `npm run test:coverage` | Roda os testes e exige 80% de cobertura          |
| `npm run verify`        | Roda tudo acima em sequência (usado no pre-push) |

## Camadas de verificação

1. **pre-commit:** ESLint e Prettier nos arquivos alterados, mais testes.
2. **pre-push:** `npm run verify`.
3. **CI (GitHub Actions):** lint, formatação, tipos, testes e scan do SonarCloud.
4. **Pull request:** o Quality Gate do SonarCloud precisa passar para liberar o merge na `main`.
