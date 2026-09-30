import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts'],
      // O Sonar lê este arquivo para mostrar a cobertura
      reporter: ['text', 'lcov'],
      // Mesmo limite do Quality Gate do Sonar: abaixo disso o teste falha
      thresholds: { lines: 80, functions: 80, branches: 80, statements: 80 },
    },
  },
});
