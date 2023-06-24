import { CSSProperties } from "react";
import { createRef, ReactNode, useEffect, useState } from "react";
import { LinearlyScaledCard } from "./LinearlyScaledCard";

interface Props {
  children: JSX.Element;
  style?: CSSProperties;
  className?: string;
  itemStyle?: CSSProperties;
  itemClassName?: string;
  isSticky?: boolean;
  from?: number;
  origin?: number;
}

export const LinearlyScaledCardWrapper = ({
  children,
  style,
  className,
  itemStyle,
  itemClassName,
  isSticky = true,
  from = 100,
  origin: propOrigin,
}: Props) => {
  const [viewHeight, setViewHeight] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    setViewHeight(window.innerHeight);
  }, []);

  const origin = propOrigin || viewHeight / 3;

  useEffect(() => {
    setContainerHeight(2 * viewHeight);
  }, [viewHeight, origin, from]);

  return (
    <div
      style={{ position: "relative", height: containerHeight, ...style }}
      className={className}
      ref={ref}
    >
      <LinearlyScaledCard
        style={itemStyle}
        isSticky={isSticky}
        className={itemClassName}
        headerRef={ref}
      >
        {children}
      </LinearlyScaledCard>
    </div>
  );
};
