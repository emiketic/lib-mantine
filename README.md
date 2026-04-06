# @emiketic/lib-mantine

A collection of handy components built on [Mantine v9](https://mantine.dev) components.

## Installation

```bash
npm install @emiketic/lib-mantine
```

### Peer dependencies

Make sure the following are installed in your project:

```bash
npm install react react-dom @mantine/core @mantine/notifications @tabler/icons-react next-intl
```

`@mantine/notifications` and `next-intl` are required if you use the `useError` hook (see [Hooks](#hooks)).

### CSS

Import Mantine's base CSS in your app entry point (e.g. `_app.tsx` or `layout.tsx`):

```tsx
import '@mantine/core/styles.css';
```

For `TextEditor`, also import:

```tsx
import '@mantine/tiptap/styles.css';
```

---

## Components

### `ClientOnly`

Prevents SSR hydration mismatches by rendering children only after the component mounts on the client.

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Content to render |
| `withLoader` | `boolean` | `false` | Show a `LoadingOverlay` while waiting for mount |

```tsx
import { ClientOnly } from '@emiketic/lib-mantine';

<ClientOnly>
  <MyClientSideWidget />
</ClientOnly>
```

---

### `ConfirmBar`

A form action bar with Confirm and Cancel buttons, typically placed at the bottom of a form.

| Prop | Type | Default | Description |
|---|---|---|---|
| `onConfirm` | `() => void` | — | Called when the confirm button is clicked |
| `onCancel` | `() => void` | `() => {}` | Called when the cancel button is clicked |
| `disabled` | `boolean` | `false` | Disables the confirm button |
| `loading` | `boolean` | `false` | Shows a loading spinner on the confirm button |
| `color` | `MantineColor` | — | Color of the confirm button |
| `withCancel` | `boolean` | `true` | Whether to show the cancel button |
| `labelProps` | `{ confirm?: string; cancel?: string }` | — | Custom button labels |

Also accepts all `BoxProps` from Mantine.

```tsx
import { ConfirmBar } from '@emiketic/lib-mantine';

<ConfirmBar
  onConfirm={handleSubmit}
  onCancel={handleReset}
  labelProps={{ confirm: 'Save', cancel: 'Discard' }}
  color="blue"
/>
```

---

### `ContentLoader`

A skeleton loading placeholder made up of animated skeleton bars. Useful as a page-level or section-level loading state.

| Prop | Type | Default | Description |
|---|---|---|---|
| `numberOfBars` | `number` | `3` | Total skeleton bars across all groups |
| `numberOfBarGroups` | `number` | `3` | Number of bar groups (adds spacing between groups) |
| `barHeight` | `number` | `15` | Height of each skeleton bar in px |
| `barSpacing` | `number` | `6` | Vertical spacing between bars in px |
| `barGroupSpacing` | `MantineSpacing` | `'lg'` | Space between bar groups |
| `visible` | `boolean` | `true` | When `false`, renders nothing |
| `withCircle` | `boolean` | `false` | Add a circular skeleton (e.g. for avatar) at the top |

Also accepts all `StackProps` from Mantine.

```tsx
import { ContentLoader } from '@emiketic/lib-mantine';

<ContentLoader visible={isLoading} withCircle />
```

---

### `ImageInput`

A file input with an inline image preview. Supports both `File` objects and URL strings as value.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `File \| string \| null` | — | Current value (controlled) |
| `withPreview` | `boolean` | `true` | Show image thumbnail next to the input |
| `previewProps` | `ImageProps` | — | Props forwarded to the preview `<Image>` |
| `disabledPlaceholderProps` | `AvatarProps` | — | Props for the `<Avatar>` shown when disabled |
| `maxFileSizeBytes` | `number` | `500_000` | Max file size before showing a warning (bytes) |

Also accepts all `FileInputProps` from Mantine (except `value`).

```tsx
import { ImageInput } from '@emiketic/lib-mantine';

const [file, setFile] = useState<File | null>(null);

<ImageInput
  label="Logo"
  value={file}
  onChange={setFile}
  maxFileSizeBytes={2_000_000}
/>
```

---

### `Logo`

An avatar-style component for displaying a business/brand logo. Optionally extracts the dominant color from the image and uses it as a background, creating a visually consistent color pair. Falls back to a building icon when no image is provided.

Requires `@emiketic/lib-utils` (installed automatically as a dependency).

| Prop | Type | Default | Description |
|---|---|---|---|
| `withColorPair` | `boolean` | `true` | Extract dominant color from image for background |

Also accepts all `AvatarProps` from Mantine.

```tsx
import { Logo } from '@emiketic/lib-mantine';

<Logo src="https://example.com/logo.png" withColorPair />
```

---

### `NativePDFViewer`

Renders a PDF file using the browser's native `<object>` tag with per-browser toolbar height correction. Handles Safari, Edge, Firefox, and Chromium-based browsers.

| Prop | Type | Default | Description |
|---|---|---|---|
| `mediaUrl` | `string` | — | URL of the PDF file |
| `title` | `string` | — | Accessible title for the object element |
| `zoomLevel` | `number` | — | Initial zoom percentage |
| `withToolbar` | `boolean` | `true` | Whether to show the browser's PDF toolbar |
| `fallback` | `ReactNode \| () => ReactNode` | Default message | Shown when the browser can't render PDFs |

```tsx
import { NativePDFViewer } from '@emiketic/lib-mantine';

<div style={{ height: '600px' }}>
  <NativePDFViewer mediaUrl="/files/report.pdf" withToolbar={false} />
</div>
```

---

### `NoData`

A centered empty-state component using Mantine's `Alert`. Useful for lists, tables, or search results with no entries.

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | `'No data'` | Title shown in the alert |
| `alertProps` | `AlertProps` | — | Props forwarded to the `<Alert>` |
| `children` | `ReactNode` | — | Optional content below the title (e.g. a CTA) |

Also accepts all `CenterProps` from Mantine.

```tsx
import { NoData } from '@emiketic/lib-mantine';

<NoData title="No reviews yet">
  <Button>Be the first to review</Button>
</NoData>
```

---

### `PageContainer`

A flexible page layout wrapper with optional title, header, right section, and scrollable content area. Useful for panel/dashboard-style pages.

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Page title rendered as `<h2>` |
| `titleProps` | `TitleProps` | — | Props forwarded to `<Title>` |
| `header` | `ReactNode` | — | Custom header — overrides the default title + right section layout |
| `headerProps` | `GroupProps` | — | Props for the default header `<Group>` |
| `rightSection` | `ReactNode` | `null` | Rendered in the top-right corner of the header |
| `fullPage` | `boolean` | `false` | Removes the header and padding — just wraps content in a `<Box>` |
| `withContentScroll` | `boolean` | `false` | Makes the container a full-height `ScrollArea` |
| `contentProps` | `StackProps \| BoxProps` | — | Props for the inner content wrapper |
| `outerContentProps` | `StackProps` | — | Props for the outer content wrapper |

Also accepts all `ScrollAreaProps` from Mantine (used when `withContentScroll` is `true`).

```tsx
import { PageContainer } from '@emiketic/lib-mantine';

<PageContainer title="Users" rightSection={<Button>Add user</Button>}>
  <UserTable />
</PageContainer>
```

---

### `PhoneInput`

An international phone number input combining a searchable country code selector with a phone number text input. Validates and normalizes to E.164 format using `libphonenumber-js`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Phone number in E.164 format (e.g. `+21698765432`) |
| `defaultValue` | `string` | — | Uncontrolled initial value |
| `defaultCountryCode` | `CountryCode` | — | Pre-select a country code (e.g. `'TN'`, `'FR'`) |
| `onChange` | `(value: string) => void` | — | Called with the full E.164 number when valid |

Also accepts all `TextInputProps` from Mantine (except `onChange`).

```tsx
import { PhoneInput } from '@emiketic/lib-mantine';

const [phone, setPhone] = useState('');

<PhoneInput
  label="Mobile"
  defaultCountryCode="FR"
  value={phone}
  onChange={setPhone}
/>
```

---

### `TextEditor`

A rich text editor built on [Tiptap](https://tiptap.dev) and [`@mantine/tiptap`](https://mantine.dev/x/tiptap/). Includes a sticky toolbar with formatting controls (bold, italic, headings, lists, links, alignment, etc.).

**Import from the dedicated subpath** so your bundler only loads TipTap when you use the editor (the main package entry does not include `TextEditor`).

Requires importing `@mantine/tiptap/styles.css` in your app.

| Prop | Type | Default | Description |
|---|---|---|---|
| `content` | `string` | — | Initial HTML content |
| `value` | `string` | — | Alias for `content` |
| `onChangeEditorHTML` | `(html?: string) => void` | `() => {}` | Called with the current HTML on every change |
| `onChange` | `(html?: string) => void` | `() => {}` | Alias for `onChangeEditorHTML` |

Also accepts all `RichTextEditorProps` from `@mantine/tiptap` (except `editor`).

```tsx
import { TextEditor } from '@emiketic/lib-mantine/text-editor';
import '@mantine/tiptap/styles.css';

<TextEditor
  content="<p>Initial content</p>"
  onChangeEditorHTML={(html) => setBody(html)}
/>
```

---

### `ThemeToggle`

A dark/light mode switch using Mantine's color scheme system. Wraps a `Switch` in a tooltip and a `ClientOnly` boundary.

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `MantineSize` | `'md'` | Size of the switch and icon |

Also accepts all `SwitchProps` from Mantine.

```tsx
import { ThemeToggle } from '@emiketic/lib-mantine';

<ThemeToggle />
```

> Requires your app to use Mantine's `MantineProvider` with `colorSchemeManager` configured.

---

## Hooks

### `useError`

Turns API or JavaScript errors into **localized** title and message strings, and can show them with Mantine’s `showNotification`. It is built for apps that already use **[next-intl](https://next-intl-docs.vercel.app)** and the **`Error`** messages namespace.

**Setup**

1. Wrap your app with `NextIntlClientProvider` (or your server messages setup) so `useTranslations("Error")` works.
2. Mount Mantine’s notifications layer, for example `Notifications` inside `MantineProvider`, and import `@mantine/notifications/styles.css` if you use Mantine’s CSS setup.

**Translation keys**

- **Generic fallback** (used when no specific code matches or as defaults):  
  `Error.APP_ERR_GENERIC.title` and `Error.APP_ERR_GENERIC.message`  
  If those keys are missing, the hook falls back to the English strings `"Error"` and `"An error has occurred"`.
- **Per error code**: for each code `MY_CODE`, provide `Error.MY_CODE.title` and `Error.MY_CODE.message`.  
  The hook detects unknown codes with `tError.has(code)` and only then reads `code.title` / `code.message`.

The library exports a default set of **API-style codes** as `CommonErrorCode` (for example `APP_ERR_AUTH_INVALID_CREDENTIALS`, `APP_ERR_UNAUTHORIZED`, `APP_ERR_GENERIC`, …). You can pass a generic type argument to `useError<"MY_CUSTOM_CODE">()` so TypeScript knows your extra codes.

**Error shapes**

- **`Error`**: the hook uses `error.message` as the translation key stem (same as `code` for `CommonError`).
- **`CommonError`**: `{ code: string; message?: string; exception?: Error }` — the `code` field drives which `Error.*.title` / `Error.*.message` entries are used.

**Hook options** (all optional)

| Option | Description |
|--------|-------------|
| `result` | `{ title?, message?, i18nKey? }` — optional defaults; `title` / `message` override the generic fallback and act as `defaultValue` when a code-specific translation exists. |
| `error` | If set, this `Error` or `CommonError` is used **instead of** the argument passed to `formatError` / `notifyError` when resolving the **code** for lookups. Handy when the displayed error should always match a fixed failure (e.g. from a mutation result). |

**Returns**

- **`formatError(err)`** — `{ title, message }` using the rules above. Pass `null` only if you rely entirely on the hook-level `error` option for resolution.
- **`notifyError(err, color?)`** — calls `formatError`, shows a Mantine notification (default color `red`; pass another `MantineColor` or string for warnings, etc.), and `console.debug` logs the `Error` instance or the error `code`.

```tsx
import { useError } from '@emiketic/lib-mantine';

function SaveButton() {
  const { notifyError } = useError();

  async function onSave() {
    try {
      await save();
    } catch (e) {
      notifyError(e instanceof Error ? e : new Error('APP_ERR_UNKNOWN'));
    }
  }

  return <button type="button" onClick={onSave}>Save</button>;
}

// Inline copy without a toast:
function ErrorBanner({ err }: { err: { code: string } | null }) {
  const { formatError } = useError();
  if (!err) return null;
  const { title, message } = formatError(err);
  return <p><strong>{title}</strong> — {message}</p>;
}
```

```tsx
// Fixed error from server result + warning-colored toast
const { notifyError } = useError({
  error: { code: 'APP_ERR_MEDIA_NOT_FOUND' },
});

notifyError(new Error('ignored for lookup'), 'orange');
```

---

## Storybook

Run the local Storybook to preview all components interactively:

```bash
npm run storybook
```

Opens at [http://localhost:6007](http://localhost:6007).

---

## License

MIT © [EMIKETIC](https://emiketic.com)
