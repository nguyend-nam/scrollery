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
  to?: number;
}

export const LinearlyScaledCardWrapper = ({
  children,
  style,
  className,
  itemStyle,
  itemClassName,
  isSticky = true,
  from = 100,
  to,
}: Props) => {
  const [viewHeight, setViewHeight] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    setViewHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    setContainerHeight(2 * viewHeight);
  }, [viewHeight]);

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
        from={from}
        to={to}
      >
        {children}
      </LinearlyScaledCard>
    </div>
  );
};
