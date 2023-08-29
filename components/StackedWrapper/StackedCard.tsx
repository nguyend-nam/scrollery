import {
  Dispatch,
  SetStateAction,
  useEffect,
  createRef,
  MutableRefObject,
  ReactNode,
  useCallback,
} from "react";
import { useIsOnScreen } from "../../hooks/useIsOnScreen";
import { CSSProperties } from "react";
import { useDebounce } from "@dwarvesf/react-hooks";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  index: number;
  visibleAmount: number;
  setVisibleAmount: Dispatch<SetStateAction<number>>;
  elRefs: MutableRefObject<any[]>;
  childrenAmount: number;
  transitionDebounce: number;
}

export const StackedCard = ({
  children,
  style,
  className,
  index,
  visibleAmount,
  elRefs,
  setVisibleAmount,
  childrenAmount,
  transitionDebounce,
}: Props) => {
  const ref = createRef<HTMLDivElement>();
  const { isVisible } = useIsOnScreen(ref);

  const debouncedInternalVisibleAmount = useDebounce(
    visibleAmount,
    transitionDebounce * 1000
  );

  useEffect(() => {
    elRefs.current[index] = ref;
  }, [elRefs, index, ref]);

  const handleScroll = useCallback(() => {
    if (isVisible) {
      const currentRect = ref.current?.getBoundingClientRect();
      if (index > 0 && index < childrenAmount - 1) {
        const prevRect =
          elRefs.current?.[index - 1]?.current?.getBoundingClientRect();
        const nextRect =
          elRefs.current?.[index + 1]?.current?.getBoundingClientRect();

        if (currentRect && prevRect && nextRect) {
          if (currentRect.top < prevRect.bottom) {
            if (!(nextRect.top < currentRect.bottom)) {
              setVisibleAmount(index + 1);
            }
          } else {
            setVisibleAmount(index);
          }
        }
      } else if (index === 0) {
        const nextRect =
          elRefs.current?.[index + 1]?.current?.getBoundingClientRect();
        if (currentRect && nextRect && nextRect.top > currentRect.bottom) {
          setVisibleAmount(1);
        }
      } else {
        const prevRect =
          elRefs.current?.[index - 1]?.current?.getBoundingClientRect();
        if (currentRect && prevRect && currentRect.top < prevRect.bottom) {
          setVisibleAmount(childrenAmount);
        }
      }
    }
  }, [childrenAmount, elRefs, index, isVisible, ref, setVisibleAmount]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setTimeout(() => window.scrollBy({ left: 0, top: 0.5 }));
    setTimeout(() => window.scrollBy({ left: 0, top: -0.5 }), 10);
  }, []);

  return (
    <div
      style={{
        transform:
          debouncedInternalVisibleAmount > index + 1
            ? `scale(${
                1 - (debouncedInternalVisibleAmount - index - 1) / 14
              }) translateY(-${
                (debouncedInternalVisibleAmount - index - 1) * 6
              }0px)`
            : "scale(1)",
        transition: "0.4s",
        position: "sticky",
        top: 80,
        height: 500,
        width: "100%",
        ...style,
      }}
      className={className}
      ref={ref}
    >
      {children}
    </div>
  );
};
