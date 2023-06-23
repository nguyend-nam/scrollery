import { Children, ReactElement, ReactNode } from "react";
import cx from "classnames";
import { RotateCard } from "./RotateCard";

interface Props {
  children: ReactNode;
  className?: string;
  bottomLayer?: ReactElement;
  bottomLayerClassName?: string;
  itemClassName?: string;
  triggerOn?: "in" | "out";
  isSticky?: boolean;
  offsetGetter?: (index?: number) => number;
}

export const RotateCardGroup = ({
  children,
  className,
  bottomLayer,
  bottomLayerClassName,
  itemClassName,
  triggerOn = "out",
  isSticky = true,
  offsetGetter,
}: Props) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className="relative">
      <div className={cx("relative", className)}>
        {(childrenArray || []).map((c, i) => (
          <RotateCard
            key={i}
            index={i + 1}
            className={itemClassName}
            triggerOn={triggerOn}
            isSticky={isSticky}
            offsetGetter={offsetGetter}
            childrenAmount={(childrenArray || []).length}
          >
            {c}
          </RotateCard>
        ))}
      </div>
      <div
        className={cx(
          "sticky bottom-[calc(100vh/3)] h-[60vw] md:h-[300px] flex justify-center items-center",
          bottomLayerClassName
        )}
      >
        {bottomLayer}
      </div>
    </div>
  );
};
