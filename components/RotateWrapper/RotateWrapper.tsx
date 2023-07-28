import {
  Children,
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { useIsMdScreenSize } from "../../hooks/useIsMdScreenSize";
import { RotateCard } from "./RotateCard";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  bottomLayer?: ReactElement;
  bottomLayerStyle?: CSSProperties;
  bottomLayerClassName?: string;
  itemStyle?: CSSProperties;
  itemClassName?: string;
  triggerOn?: "in" | "out";
  isSticky?: boolean;
  offsetGetter?: (index?: number) => number;
  threshold?: number;
}

export const RotateWrapper = ({
  children,
  style,
  className,
  bottomLayer,
  bottomLayerStyle,
  bottomLayerClassName,
  itemStyle,
  itemClassName,
  triggerOn = "out",
  isSticky = true,
  offsetGetter,
  threshold,
}: Props) => {
  const childrenArray = Children.toArray(children);
  const [viewHeight, setViewHeight] = useState<number>(0);
  const [viewWidth, setViewWidth] = useState<number>(0);
  const isMd = useIsMdScreenSize();

  useEffect(() => {
    setViewHeight(window.innerHeight);
    setViewWidth(window.innerWidth);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative", ...style }} className={className}>
        {(childrenArray || []).map((c, i) => (
          <RotateCard
            key={i}
            index={i + 1}
            style={itemStyle}
            className={itemClassName}
            triggerOn={triggerOn}
            isSticky={isSticky}
            offsetGetter={offsetGetter}
            childrenAmount={(childrenArray || []).length}
            stableThreshold={threshold}
          >
            {c}
          </RotateCard>
        ))}
      </div>
      <div
        style={{
          position: "sticky",
          bottom: viewHeight / 3,
          height: isMd ? 300 : viewWidth * 0.6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...bottomLayerStyle,
        }}
        className={bottomLayerClassName}
      >
        {bottomLayer}
      </div>
    </div>
  );
};
