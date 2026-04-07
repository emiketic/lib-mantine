import * as react_jsx_runtime from 'react/jsx-runtime';
import { RichTextEditorProps } from '@mantine/tiptap';

interface TextEditorProps extends Omit<RichTextEditorProps, 'editor' | 'onChange'> {
    content?: string;
    value?: string;
    onChangeEditorHTML?: (html: string | undefined) => void;
    onChange?: (html: string | undefined) => void;
}

declare function TextEditor({ content, value, onChangeEditorHTML, onChange, ...props }: TextEditorProps): react_jsx_runtime.JSX.Element;

export { TextEditor, type TextEditorProps };
