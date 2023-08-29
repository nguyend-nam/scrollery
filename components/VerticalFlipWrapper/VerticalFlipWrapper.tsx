import { useEffect, createRef, useState, useCallback } from "react";
import { CSSProperties } from "react";

interface Props {
  children: JSX.Element;
  style?: CSSProperties;
  className?: string;
  threshold?: number;
  disableFlipUp?: boolean;
  disableFlipDown?: boolean;
}

export const VerticalFlipWrapper = ({
  children,
  style,
  className,
  threshold = 0,
  disableFlipUp = false,
  disableFlipDown = false,
}: Props) => {
  const ref = createRef<HTMLDivElement>();
  const [offset, setOffset] = useState<number>(0);
  const [viewHeight, setViewHeight] = useState<number>(0);

  const handleOffset = useCallback(() => {
    if (ref?.current) {
      const yTop = ref?.current?.getBoundingClientRect().top;
      const yBottom = ref?.current?.getBoundingClientRect().bottom;
      if (
        typeof yTop === "number" &&
        typeof yBottom === "number" &&
        (yTop + yBottom) / 2 !== 0
      ) {
        const value = (yBottom + yTop) / 2;
        if (value <= viewHeight + threshold && value >= -threshold) {
          setOffset((value / (viewHeight / 2) - 1) * 60);
          if (disableFlipDown && value < viewHeight / 2) {
            setOffset(0);
          }
          if (disableFlipUp && value > viewHeight / 2) {
            setOffset(0);
          }
        } else {
          if (value > viewHeight + threshold) {
            setOffset(disableFlipUp ? 0 : 60);
          } else if (value < -viewHeight) {
            setOffset(disableFlipDown ? 0 : -60);
          }
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, viewHeight, disableFlipUp, disableFlipDown]);

  useEffect(() => {
    window.addEventListener("scroll", handleOffset);

    return () => {
      window.removeEventListener("scroll", handleOffset);
    };
  }, [handleOffset]);

  useEffect(() => {
    setTimeout(() => window.scrollBy({ left: 0, top: 0.5 }));
    setTimeout(() => window.scrollBy({ left: 0, top: -0.5 }), 10);
    setViewHeight(window.innerHeight);
  }, []);

  return (
    <div
      style={{
        transform: `perspective(1400px) rotateX(${offset}deg)`,
        ...style,
      }}
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
};
