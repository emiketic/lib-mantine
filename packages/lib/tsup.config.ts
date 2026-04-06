import { defineConfig } from 'tsup';

/**
 * Unbundled emit: Mantine, React, and optional TipTap stay as bare imports so the
 * consuming app resolves a single copy (peerDependencies).
 */
export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  bundle: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});
