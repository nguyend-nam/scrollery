import {
  useEffect,
  createRef,
  useState,
  ReactNode,
  CSSProperties,
} from "react";
import { useIsMdScreenSize } from "../../hooks/useIsMdScreenSize";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
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
  style,
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
  const [viewWidth, setViewWidth] = useState<number>(0);
  const isMd = useIsMdScreenSize();

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
    setViewWidth(window.innerWidth);
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
        width: isMd ? 300 : viewWidth / 1.5,
        height: isMd ? 300 : viewWidth / 1.5,
        position: isSticky ? "sticky" : "static",
        ...style,
      }}
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
};
