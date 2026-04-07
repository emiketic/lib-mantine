import { defineConfig } from 'tsup';

/**
 * Bundled emit with explicit externals:
 *
 * - bundle: true  → a single dist/index.mjs (+ .js) is emitted, so there is
 *   exactly one file whose bare `import … from '@mantine/core'` the consumer's
 *   bundler must resolve. With bundle: false (40+ individual files) Turbopack
 *   walks up from each file's path and can hit a pnpm-hoisted copy of
 *   @mantine/core that is scoped to this package, creating a second React
 *   context and the "MantineProvider not found" error.
 *
 * - external lists every peerDependency so they remain as bare imports that
 *   the consuming app resolves to its own single copy.
 *
 * - banner adds "use client" to the output bundle (esbuild strips directives
 *   during bundling; the source-level directive in index.ts covers consumers
 *   that use transpilePackages + the "source" export condition).
 */
export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  bundle: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    '@mantine/core',
    '@mantine/hooks',
    '@mantine/notifications',
    '@mantine/tiptap',
    '@tabler/icons-react',
    'next-intl',
    '@tiptap/extension-highlight',
    '@tiptap/extension-subscript',
    '@tiptap/extension-superscript',
    '@tiptap/extension-text-align',
    '@tiptap/extension-underline',
    '@tiptap/react',
    '@tiptap/starter-kit',
  ],
  banner: {
    js: '"use client";',
  },
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});
