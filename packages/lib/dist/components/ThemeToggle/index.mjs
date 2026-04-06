import { jsx } from "react/jsx-runtime";
import {
  Switch,
  ThemeIcon,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme
} from "@mantine/core";
import { IconMoon as IconSwitchDark, IconSun as IconSwitchLight } from "@tabler/icons-react";
import ClientOnly from "../ClientOnly";
function ThemeToggleInner({ ...props }) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  return /* @__PURE__ */ jsx(
    Tooltip,
    {
      label: computedColorScheme === "light" ? "Switch to dark mode" : "Switch to light mode",
      position: "bottom",
      withinPortal: true,
      children: /* @__PURE__ */ jsx(
        Switch,
        {
          styles: { track: { cursor: "pointer" } },
          defaultChecked: computedColorScheme === "dark",
          onChange: () => setColorScheme(computedColorScheme === "light" ? "dark" : "light"),
          onLabel: /* @__PURE__ */ jsx(ThemeIcon, { size: props.size ?? "sm", variant: "transparent", children: /* @__PURE__ */ jsx(IconSwitchDark, {}) }),
          offLabel: /* @__PURE__ */ jsx(ThemeIcon, { size: props.size ?? "sm", color: "yellow", variant: "transparent", children: /* @__PURE__ */ jsx(IconSwitchLight, {}) }),
          color: "dark",
          size: "md",
          ...props
        }
      )
    }
  );
}
function ThemeToggle(props) {
  return /* @__PURE__ */ jsx(ClientOnly, { children: /* @__PURE__ */ jsx(ThemeToggleInner, { ...props }) });
}
var ThemeToggle_default = ThemeToggle;
export {
  ThemeToggle_default as default
};
//# sourceMappingURL=index.mjs.map