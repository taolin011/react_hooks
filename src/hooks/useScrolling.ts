import { MutableRefObject, useState } from "react";

export default function useScrolling(ref: MutableRefObject<any>): boolean {
  const [state, setState] = useState<boolean>(false);
  let timer: NodeJS.Timeout | null = null;
  const handleScroll = () => {
    !state && setState(true);
    timer !== null && clearTimeout(timer);
    timer = setTimeout(() => {
      setState(false);
    }, 150);
  };
  ref.current.addEventListener("scroll", handleScroll);
  return state;
}
