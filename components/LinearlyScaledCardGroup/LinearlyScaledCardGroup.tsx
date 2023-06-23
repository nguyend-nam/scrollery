import { createRef, ReactNode, useEffect, useState } from "react";
import cx from "classnames";
import { LinearlyScaledCard } from "./LinearlyScaledCard";

interface Props {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  isSticky?: boolean;
  from?: number;
  origin?: number;
}

export const LinearlyScaledCardGroup = ({
  children,
  className,
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
      className={cx("relative", className)}
      style={{ height: containerHeight }}
      ref={ref}
    >
      <LinearlyScaledCard
        className={itemClassName}
        isSticky={isSticky}
        headerRef={ref}
      >
        {children}
      </LinearlyScaledCard>
    </div>
  );
};
