import { jsx, jsxs } from "react/jsx-runtime";
import { Box, Button, Group } from "@mantine/core";
function ConfirmBar({
  onConfirm = () => {
  },
  onCancel = () => {
  },
  disabled = false,
  loading = false,
  labelProps,
  color,
  withCancel = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(Box, { ...props, children: /* @__PURE__ */ jsxs(Group, { h: "100%", justify: "flex-end", align: "center", children: [
    withCancel ? /* @__PURE__ */ jsx(Button, { onClick: () => onCancel(), variant: "subtle", children: labelProps?.cancel ?? "Cancel" }) : null,
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => onConfirm(),
        disabled,
        variant: "filled",
        loading,
        color,
        children: labelProps?.confirm ?? "Confirm"
      }
    )
  ] }) });
}
var ConfirmBar_default = ConfirmBar;
export {
  ConfirmBar_default as default
};
//# sourceMappingURL=index.mjs.map