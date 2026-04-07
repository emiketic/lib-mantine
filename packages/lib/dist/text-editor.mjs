"use client";
"use client";

// src/components/TextEditor/index.tsx
import { useEffect } from "react";
import Highlight from "@tiptap/extension-highlight";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Link, RichTextEditor } from "@mantine/tiptap";
import { jsx, jsxs } from "react/jsx-runtime";
function TextEditor({
  content,
  value,
  onChangeEditorHTML = () => {
  },
  onChange = () => {
  },
  ...props
}) {
  const editor = useEditor({
    editable: true,
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] })
    ],
    content
  });
  useEffect(() => {
    onChangeEditorHTML(editor?.getHTML());
    onChange(editor?.getHTML());
  }, [editor?.state, editor, onChangeEditorHTML, onChange]);
  return /* @__PURE__ */ jsxs(RichTextEditor, { editor, ...props, children: [
    /* @__PURE__ */ jsxs(RichTextEditor.Toolbar, { sticky: true, stickyOffset: 60, children: [
      /* @__PURE__ */ jsxs(RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ jsx(RichTextEditor.Bold, {}),
        /* @__PURE__ */ jsx(RichTextEditor.Italic, {}),
        /* @__PURE__ */ jsx(RichTextEditor.Underline, {}),
        /* @__PURE__ */ jsx(RichTextEditor.Strikethrough, {}),
        /* @__PURE__ */ jsx(RichTextEditor.ClearFormatting, {}),
        /* @__PURE__ */ jsx(RichTextEditor.Highlight, {}),
        /* @__PURE__ */ jsx(RichTextEditor.Code, {})
      ] }),
      /* @__PURE__ */ jsxs(RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ jsx(RichTextEditor.H1, {}),
        /* @__PURE__ */ jsx(RichTextEditor.H2, {}),
        /* @__PURE__ */ jsx(RichTextEditor.H3, {}),
        /* @__PURE__ */ jsx(RichTextEditor.H4, {})
      ] }),
      /* @__PURE__ */ jsxs(RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ jsx(RichTextEditor.Blockquote, {}),
        /* @__PURE__ */ jsx(RichTextEditor.Hr, {}),
        /* @__PURE__ */ jsx(RichTextEditor.BulletList, {}),
        /* @__PURE__ */ jsx(RichTextEditor.OrderedList, {}),
        /* @__PURE__ */ jsx(RichTextEditor.Subscript, {}),
        /* @__PURE__ */ jsx(RichTextEditor.Superscript, {})
      ] }),
      /* @__PURE__ */ jsxs(RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ jsx(RichTextEditor.Link, {}),
        /* @__PURE__ */ jsx(RichTextEditor.Unlink, {})
      ] }),
      /* @__PURE__ */ jsxs(RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ jsx(RichTextEditor.AlignLeft, {}),
        /* @__PURE__ */ jsx(RichTextEditor.AlignCenter, {}),
        /* @__PURE__ */ jsx(RichTextEditor.AlignJustify, {}),
        /* @__PURE__ */ jsx(RichTextEditor.AlignRight, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx(RichTextEditor.Content, {})
  ] });
}
var TextEditor_default = TextEditor;
export {
  TextEditor_default as TextEditor
};
//# sourceMappingURL=text-editor.mjs.map