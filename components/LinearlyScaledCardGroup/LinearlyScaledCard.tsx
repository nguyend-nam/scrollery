import { useEffect, createRef, useState, RefObject, ReactNode } from "react";
import cx from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
  isSticky?: boolean;
  from?: number;
  to?: number;
  headerRef?: RefObject<HTMLDivElement | null>;
}

export const LinearlyScaledCard = ({
  children,
  className,
  isSticky = true,
  headerRef,
  from = 100,
  to,
}: Props) => {
  const ref = createRef<HTMLDivElement>();
  const [offset, setOffset] = useState<number>(0);
  const [containerOffset, setContainerOffset] = useState<number>(0);

  const [viewHeight, setViewHeight] = useState<number>(0);

  useEffect(() => {
    if (window && ref?.current) {
      window.addEventListener("scroll", () => {
        const yTop = ref?.current?.getBoundingClientRect().top;
        const yBottom = ref?.current?.getBoundingClientRect().bottom;
        if (typeof yTop === "number" && typeof yBottom === "number") {
          setOffset((yTop + yBottom) / 2);
        }
      });
    }
  }, [ref, setOffset]);

  useEffect(() => {
    if (window && headerRef?.current) {
      window.addEventListener("scroll", () => {
        const y = headerRef?.current?.getBoundingClientRect().top;
        if (typeof y === "number") {
          setContainerOffset(y);
        }
      });
    }
  }, [headerRef, setContainerOffset]);

  useEffect(() => {
    setViewHeight(window.innerHeight);
  }, []);

  let renderHeight = 0;
  if (offset - containerOffset < from) {
    renderHeight = from;
  } else if (offset - containerOffset >= (to || viewHeight)) {
    renderHeight = to || viewHeight;
  } else {
    renderHeight = offset - containerOffset;
  }

  return (
    <div
      className={cx(
        `w-[80%] h-[60vw] md:w-[300px] md:h-[300px]`,
        {
          sticky: isSticky,
        },
        className
      )}
      style={{
        height: renderHeight,
        width: renderHeight,
        maxWidth: "100%",
        top: (viewHeight - renderHeight) / 2,
        // transform: `scale(${renderHeight / from})`,
        // transition: '0.1s',
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};
