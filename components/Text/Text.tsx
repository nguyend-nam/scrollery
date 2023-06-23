import { createElement, HTMLAttributes } from "react";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "small" | "b" | "strong" | "i" | "em";
  truncate?: boolean;
}

export const Text: React.FC<TextProps> = (props) => {
  const {
    style = { color: "color: rgb(17 24 39 / var(--tw-text-opacity))" },
    truncate,
    as = "p",
    ...rest
  } = props;
  const styles = {};
  if (truncate) {
    Object.assign(styles, {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    });
  }

  return createElement(as, { style: { ...style, ...styles }, ...rest });
};
