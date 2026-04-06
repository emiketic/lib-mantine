import { defineConfig } from 'tsup';

/**
 * Unbundled emit: the main `index` must not statically import TextEditor, or every
 * consumer of the package loads @mantine/tiptap (see `src/text-editor.ts` subpath).
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
