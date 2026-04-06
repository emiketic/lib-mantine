import { jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { LoadingOverlay } from "@mantine/core";
function ClientOnly({
  children,
  withLoader = false,
  ...delegated
}) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    if (withLoader) {
      return /* @__PURE__ */ jsx(LoadingOverlay, {});
    }
    return null;
  }
  return /* @__PURE__ */ jsx("div", { ...delegated, children });
}
export {
  ClientOnly as default
};
//# sourceMappingURL=index.mjs.map