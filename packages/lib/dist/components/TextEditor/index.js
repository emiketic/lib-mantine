"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var TextEditor_exports = {};
__export(TextEditor_exports, {
  default: () => TextEditor_default
});
module.exports = __toCommonJS(TextEditor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_extension_highlight = __toESM(require("@tiptap/extension-highlight"));
var import_extension_subscript = __toESM(require("@tiptap/extension-subscript"));
var import_extension_superscript = __toESM(require("@tiptap/extension-superscript"));
var import_extension_text_align = __toESM(require("@tiptap/extension-text-align"));
var import_extension_underline = __toESM(require("@tiptap/extension-underline"));
var import_react2 = require("@tiptap/react");
var import_starter_kit = __toESM(require("@tiptap/starter-kit"));
var import_tiptap = require("@mantine/tiptap");
function TextEditor({
  content,
  value,
  onChangeEditorHTML = () => {
  },
  onChange = () => {
  },
  ...props
}) {
  const editor = (0, import_react2.useEditor)({
    editable: true,
    extensions: [
      import_starter_kit.default,
      import_extension_underline.default,
      import_tiptap.Link,
      import_extension_superscript.default,
      import_extension_subscript.default,
      import_extension_highlight.default,
      import_extension_text_align.default.configure({ types: ["heading", "paragraph"] })
    ],
    content
  });
  (0, import_react.useEffect)(() => {
    onChangeEditorHTML(editor?.getHTML());
    onChange(editor?.getHTML());
  }, [editor?.state, editor, onChangeEditorHTML, onChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tiptap.RichTextEditor, { editor, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tiptap.RichTextEditor.Toolbar, { sticky: true, stickyOffset: 60, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tiptap.RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.Bold, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.Italic, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.Underline, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.Strikethrough, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.ClearFormatting, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.Highlight, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.Code, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tiptap.RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.H1, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.H2, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.H3, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.H4, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tiptap.RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.Blockquote, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.Hr, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.BulletList, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.OrderedList, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.Subscript, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.Superscript, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tiptap.RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.Link, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.Unlink, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tiptap.RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.AlignLeft, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.AlignCenter, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.AlignJustify, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.AlignRight, {})
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tiptap.RichTextEditor.Content, {})
  ] });
}
var TextEditor_default = TextEditor;
//# sourceMappingURL=index.js.map