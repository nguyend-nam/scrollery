import { useState, useMemo, useEffect, RefObject } from 'react'

/* 
  This hook is used to detect whether a reference argument is
  inside or outside the viewport and return a boolean.
  In this case, we use this custom hook to trigger showing
  the sticky header when the main header is scrolled outside
  the viewport.
*/
export function useIsOnScreen(ref: RefObject<HTMLDivElement>) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => {
    const obs = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    )
    return obs
  }, [])

  useEffect(() => {
    if (ref?.current) {
      observer.observe(ref?.current as Element)
    }
    return () => {
      observer.disconnect()
    }
  }, [observer, ref])

  return isIntersecting
}
