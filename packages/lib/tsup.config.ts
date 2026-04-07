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
const sharedExternals = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  '@mantine/core',
  '@mantine/hooks',
  '@mantine/notifications',
  '@tabler/icons-react',
  'next-intl',
];

const tiptapExternals = [
  '@mantine/tiptap',
  '@tiptap/extension-highlight',
  '@tiptap/extension-subscript',
  '@tiptap/extension-superscript',
  '@tiptap/extension-text-align',
  '@tiptap/extension-underline',
  '@tiptap/react',
  '@tiptap/starter-kit',
];

export default defineConfig([
  // Main bundle — zero tiptap imports, no install burden for non-TextEditor users.
  {
    entry: { index: 'src/index.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    bundle: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: sharedExternals,
    banner: { js: '"use client";' },
    esbuildOptions(options) {
      options.jsx = 'automatic';
    },
  },
  // TextEditor sub-export — tiptap peers stay external; consumers install them
  // only when they actually use this entry.
  {
    entry: { 'text-editor': 'src/text-editor.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    bundle: true,
    splitting: false,
    sourcemap: true,
    outDir: 'dist',
    external: [...sharedExternals, ...tiptapExternals],
    banner: { js: '"use client";' },
    esbuildOptions(options) {
      options.jsx = 'automatic';
    },
  },
]);
