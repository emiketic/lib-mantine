import * as react_jsx_runtime from 'react/jsx-runtime';
import { TextEditorProps } from './types.mjs';
import '@mantine/tiptap';

declare function TextEditor({ content, value, onChangeEditorHTML, onChange, ...props }: TextEditorProps): react_jsx_runtime.JSX.Element;

export { TextEditor as default };
