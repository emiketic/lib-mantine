import { jsx, jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import { Skeleton, Space, Stack } from "@mantine/core";
function ContentLoader({
  numberOfBars = 3,
  numberOfBarGroups = 3,
  barHeight = 15,
  barSpacing = 6,
  barGroupSpacing = "lg",
  visible = true,
  withCircle = false,
  ...props
}) {
  if (!visible) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Stack, { gap: "sm", px: "5rem", py: "md", ...props, children: [
    withCircle ? /* @__PURE__ */ jsx(Skeleton, { height: 70, circle: true, mb: "xl" }) : null,
    Array.from({ length: numberOfBarGroups }).map((_, index) => /* @__PURE__ */ jsxs(Fragment, { children: [
      Array.from({ length: Math.ceil(numberOfBars / numberOfBarGroups) }).map((_2, index2) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Skeleton, { height: barHeight, radius: "xl" }),
        /* @__PURE__ */ jsx(Skeleton, { height: barHeight, mt: barSpacing, radius: "xl" }),
        /* @__PURE__ */ jsx(Skeleton, { height: barHeight, mt: barSpacing, width: "70%", radius: "xl" })
      ] }, index2)),
      /* @__PURE__ */ jsx(Space, { h: barGroupSpacing })
    ] }, index))
  ] });
}
var ContentLoader_default = ContentLoader;
export {
  ContentLoader_default as default
};
//# sourceMappingURL=index.mjs.map