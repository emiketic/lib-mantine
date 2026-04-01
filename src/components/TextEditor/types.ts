import { RichTextEditorProps } from '@mantine/tiptap';

export interface TextEditorProps extends Omit<RichTextEditorProps, 'editor' | 'onChange'> {
  content?: string;
  value?: string;
  onChangeEditorHTML?: (html: string | undefined) => void;
  onChange?: (html: string | undefined) => void;
}
