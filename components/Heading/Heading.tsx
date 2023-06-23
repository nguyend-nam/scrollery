import { createElement, HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const { as = "h2", ...rest } = props;

  return createElement(as, {
    style: {
      fontWeight: ["h1", "h2"].includes(as) ? "bold" : "normal",
    },
    ...rest,
  });
};
