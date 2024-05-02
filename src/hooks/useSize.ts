import { MutableRefObject, useEffect, useState } from "react";
interface ReturnType {
  width: number;
  height: number;
}
export default function useSize(
  ref: MutableRefObject<Element>
): ReturnType | undefined {
  const [value, setValue] = useState<ReturnType | undefined>(() =>
    ref.current
      ? { width: ref.current.clientWidth, height: ref.current.clientHeight }
      : undefined
  );
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        let { clientWidth, clientHeight } = entry.target;
        setValue({ width: clientWidth, height: clientHeight });
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return value;
}
