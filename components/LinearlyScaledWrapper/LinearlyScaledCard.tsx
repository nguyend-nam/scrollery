import {
  useEffect,
  createRef,
  useState,
  RefObject,
  ReactNode,
  useCallback,
} from "react";
import { CSSProperties } from "react";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  isSticky?: boolean;
  from?: number;
  to?: number;
  headerRef?: RefObject<HTMLDivElement | null>;
}

export const LinearlyScaledCard = ({
  children,
  style,
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

  const handleOffset = useCallback(() => {
    const currentRef = ref?.current;
    if (currentRef) {
      const yTop = ref?.current?.getBoundingClientRect().top;
      const yBottom = ref?.current?.getBoundingClientRect().bottom;
      if (typeof yTop === "number" && typeof yBottom === "number") {
        setOffset((yTop + yBottom) / 2);
      }
    }
  }, [ref]);

  useEffect(() => {
    window.addEventListener("scroll", handleOffset);

    return () => {
      window.removeEventListener("scroll", handleOffset);
    };
  }, [handleOffset]);

  const handleContainerOffset = useCallback(() => {
    const currentRef = ref?.current;
    if (currentRef) {
      const y = headerRef?.current?.getBoundingClientRect().top;
      if (typeof y === "number") {
        setContainerOffset(y);
      }
    }
  }, [headerRef, ref]);

  useEffect(() => {
    window.addEventListener("scroll", handleContainerOffset);

    return () => {
      window.removeEventListener("scroll", handleContainerOffset);
    };
  }, [handleContainerOffset]);

  useEffect(() => {
    setTimeout(() => window.scrollBy({ left: 0, top: 0.5 }));
    setTimeout(() => window.scrollBy({ left: 0, top: -0.5 }), 10);
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
      style={{
        position: isSticky ? "sticky" : "static",
        height: renderHeight,
        width: renderHeight,
        maxWidth: "100%",
        top: (viewHeight - renderHeight) / 2,
        ...style,
      }}
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
};
