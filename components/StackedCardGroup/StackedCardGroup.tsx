import { CSSProperties } from "react";
import { Children, useState, useRef, ReactNode } from "react";
import { StackedCard } from "./StackedCard";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  itemStyle?: CSSProperties;
  itemClassName?: string;
}

export const StackedCardGroup = ({
  children,
  style,
  className,
  itemStyle,
  itemClassName,
}: Props) => {
  const childrenArray = Children.toArray(children);
  const [visibleAmount, setVisibleAmount] = useState(1);

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
          className={itemClassName}
        >
          {c}
        </StackedCard>
      ))}
    </div>
  );
};
