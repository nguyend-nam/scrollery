import {
  Dispatch,
  SetStateAction,
  useEffect,
  createRef,
  MutableRefObject,
  ReactNode,
} from "react";
import { useIsOnScreen } from "../../hooks/useIsOnScreen";
import { CSSProperties } from "react";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  index: number;
  visibleAmount: number;
  setVisibleAmount: Dispatch<SetStateAction<number>>;
  elRefs: MutableRefObject<any[]>;
}

export const StackedCard = ({
  children,
  style,
  className,
  index,
  visibleAmount,
  elRefs,
  setVisibleAmount,
}: Props) => {
  const ref = createRef<HTMLDivElement>();
  const isVisible = useIsOnScreen(ref);

  useEffect(() => {
    elRefs.current[index] = ref;
  }, [elRefs, index, ref]);

  useEffect(() => {
    const handleScroll = () => {
      if (isVisible) {
        if (index > 0) {
          const currentRect = ref.current?.getBoundingClientRect();
          const prevRect =
            elRefs.current?.[index - 1]?.current?.getBoundingClientRect();

          if (currentRect && prevRect && currentRect.top < prevRect.bottom) {
            setVisibleAmount(index + 1);
          }
        } else {
          setVisibleAmount(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elRefs, index, isVisible, ref, setVisibleAmount]);

  return (
    <div
      style={{
        transform:
          visibleAmount > index + 1
            ? `scale(${1 - (visibleAmount - index - 1) / 14}) translateY(-${
                (visibleAmount - index - 1) * 6
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
