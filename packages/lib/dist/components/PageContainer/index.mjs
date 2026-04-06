import { jsx, jsxs } from "react/jsx-runtime";
import { Box, Container, Group, ScrollArea, Stack, Title } from "@mantine/core";
function PageContainer({
  children,
  title,
  titleProps,
  header,
  headerProps,
  rightSection = null,
  contentProps,
  outerContentProps,
  fullPage = false,
  withContentScroll = false,
  ...props
}) {
  function getTitle() {
    if (title) {
      return /* @__PURE__ */ jsx(Title, { order: 2, ...titleProps, children: title });
    }
    return null;
  }
  function getHeader() {
    if (header) {
      return header;
    }
    return /* @__PURE__ */ jsxs(Group, { justify: "space-between", w: "100%", ...headerProps, children: [
      getTitle(),
      rightSection
    ] });
  }
  function getContent() {
    if (fullPage) {
      return /* @__PURE__ */ jsx(Box, { ...contentProps, children });
    }
    return /* @__PURE__ */ jsxs(Stack, { gap: "xl", ...outerContentProps, children: [
      getHeader(),
      /* @__PURE__ */ jsx(Stack, { px: "xl", py: "lg", h: "100%", w: "100%", ...contentProps, children })
    ] });
  }
  if (withContentScroll) {
    return /* @__PURE__ */ jsx(ScrollArea, { h: "100vh", p: 0, ...props, children: /* @__PURE__ */ jsx(Container, { fluid: true, children: getContent() }) });
  }
  return /* @__PURE__ */ jsx(Container, { p: 0, w: "100%", fluid: true, children: getContent() });
}
var PageContainer_default = PageContainer;
export {
  PageContainer_default as default
};
//# sourceMappingURL=index.mjs.map