import { jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Avatar, ThemeIcon } from "@mantine/core";
import { getDominantColorFromImageUrl } from "../../utils/colors";
import { IconBuildingSkyscraper as IconFallback } from "@tabler/icons-react";
function Logo({ withColorPair = true, ...props }) {
  const [logoColorPair, setLogoColorPair] = useState({
    dominant: "#000000",
    background: "#ffffff"
  });
  useEffect(() => {
    let isMounted = true;
    if (props.src && withColorPair) {
      getDominantColorFromImageUrl(props.src).then(({ dominant, background }) => {
        if (isMounted) {
          setLogoColorPair({ dominant, background });
        }
      });
    } else if (isMounted) {
      setLogoColorPair({ dominant: "#000000", background: "#ffffff" });
    }
    return () => {
      isMounted = false;
    };
  }, [props.src, withColorPair]);
  return /* @__PURE__ */ jsx(
    Avatar,
    {
      size: "5rem",
      radius: "lg",
      p: "0.125rem",
      bg: withColorPair ? logoColorPair.background : void 0,
      styles: {
        image: {
          objectFit: "contain",
          objectPosition: "center"
        }
      },
      imageProps: { referrerPolicy: "no-referrer" },
      ...props,
      children: /* @__PURE__ */ jsx(ThemeIcon, { variant: "transparent", size: "5rem", children: /* @__PURE__ */ jsx(IconFallback, { size: 48 * 1.5, stroke: 1 }) })
    }
  );
}
var Logo_default = Logo;
export {
  Logo_default as default
};
//# sourceMappingURL=index.mjs.map