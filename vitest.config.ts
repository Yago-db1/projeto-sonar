import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts'],
      // O Sonar lê este arquivo para mostrar a cobertura
      reporter: ['text', 'lcov'],
    },
  },
});
