import { CSSProperties } from "react";
import { useEffect } from "react";
import { Children, useState, useRef, ReactNode } from "react";
import { StackedCard } from "./StackedCard";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  itemStyle?: CSSProperties;
  itemClassName?: string;
  getCurrentVisibleItems?: (amount: number) => void;
}

export const StackedCardWrapper = ({
  children,
  style,
  className,
  itemStyle,
  itemClassName,
  getCurrentVisibleItems,
}: Props) => {
  const childrenArray = Children.toArray(children);
  const [visibleAmount, setVisibleAmount] = useState(1);

  useEffect(() => {
    getCurrentVisibleItems?.(visibleAmount);
  }, [getCurrentVisibleItems, visibleAmount]);

  console.log(visibleAmount);

  const elRefs = useRef<any[]>(new Array((childrenArray || []).length));

  return (
    <div style={{ position: "relative", ...style }} className={className}>
      {(childrenArray || []).map((c, i) => (
        <StackedCard
          key={i}
          index={i}
          elRefs={elRefs}
          visibleAmount={visibleAmount}
          setVisibleAmount={setVisibleAmount}
          style={itemStyle}
          childrenAmount={(childrenArray || []).length}
          className={itemClassName}
        >
          {c}
        </StackedCard>
      ))}
    </div>
  );
};
