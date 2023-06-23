import { useEffect, createRef, useState, ReactNode } from "react";
import cx from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
  index: number;
  stableThreshold?: number;
  triggerOn?: "in" | "out";
  isSticky?: boolean;
  offsetGetter?: (index?: number) => number;
  childrenAmount: number;
}

export const RotateCard = ({
  children,
  className,
  index,
  stableThreshold,
  triggerOn = "out",
  isSticky = true,
  offsetGetter,
  childrenAmount,
}: Props) => {
  const ref = createRef<HTMLDivElement>();
  const [offset, setOffset] = useState<number>(0);
  const [viewHeight, setViewHeight] = useState<number>(0);

  useEffect(() => {
    if (window && ref?.current) {
      window.addEventListener("scroll", () => {
        const y = ref?.current?.getBoundingClientRect().bottom;
        if (typeof y === "number") {
          setOffset(y);
        }
      });
    }
  }, [ref, setOffset]);

  useEffect(() => {
    setViewHeight(window.innerHeight);
  }, []);

  const threshold = stableThreshold || viewHeight / 3;
  const triggerCondition =
    triggerOn === "out"
      ? offset > viewHeight - threshold
      : offset <= viewHeight - threshold;
  const cardOffset =
    typeof offsetGetter === "function" ? offsetGetter(index) : 1 - index;

  return (
    <div
      className={cx(
        `w-[calc(100vw/1.5)] h-[calc(100vw/1.5)] md:w-[300px] md:h-[300px]`,
        {
          sticky: isSticky,
        },
        className
      )}
      style={{
        ...(triggerOn === "out" ? { bottom: threshold } : { top: threshold }),
        transform: `rotate(${
          triggerCondition
            ? cardOffset * 6
            : cardOffset * 6 - (viewHeight - threshold - offset) / 7
        }deg)`,
        transition: "0.08s",
        ...(triggerOn === "out"
          ? { zIndex: (childrenAmount - index + 1) * 10 }
          : { zIndex: index * 10 }),
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};
