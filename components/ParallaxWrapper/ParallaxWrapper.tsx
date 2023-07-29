import { useEffect, createRef, useState } from "react";
import { CSSProperties } from "react";

interface Props {
  children: JSX.Element;
  style?: CSSProperties;
  className?: string;
  threshold?: number;
  layer: number;
}

export const ParallaxWrapper = ({
  children,
  style,
  className,
  threshold = 200,
  layer = 0,
}: Props) => {
  const ref = createRef<HTMLDivElement>();
  const [offset, setOffset] = useState<number>(0);
  const [viewHeight, setViewHeight] = useState<number>(0);

  useEffect(() => {
    const handleOffset = () => {
      if (window && ref?.current) {
        const yTop = ref?.current?.getBoundingClientRect().top;
        const yBottom = ref?.current?.getBoundingClientRect().bottom;
        if (
          typeof yTop === "number" &&
          typeof yBottom === "number" &&
          (yTop + yBottom) / 2 !== 0
        ) {
          const value = (yBottom + yTop) / 2;
          if (value <= viewHeight + threshold && value >= -threshold) {
            setOffset((value / (viewHeight / 2) - 1) * 12 * layer);
          }
        }
      }
    };

    window.addEventListener("scroll", handleOffset);

    return () => {
      window.removeEventListener("scroll", handleOffset);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, viewHeight]);

  useEffect(() => {
    setViewHeight(window.innerHeight);
  }, []);

  return (
    <div
      style={{
        transform: `translateY(${offset}px)`,
        ...style,
      }}
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
};
