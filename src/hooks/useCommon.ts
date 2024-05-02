import { useState, useMemo } from "react";

export function useCommon(initialState: number): [number, () => void] {
  let randNum = useMemo(() => Math.random(), []);
  let [num, setNum] = useState<number>(randNum);
  function increment() {
    setNum(num + 1);
  }
  return [num, increment];
}
