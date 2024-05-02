import { ReactElement, cloneElement, useState } from "react";

export default function useHover(
  element: ReactElement
): [ReactElement, boolean] {
  const [state, setState] = useState<boolean>(false);
  const mouseEnter =
    (originEvent: (event: MouseEvent) => any) => (event: MouseEvent) => {
      originEvent?.(event);
      setState(true);
    };
  const mouseLeave =
    (originEvent: (event: MouseEvent) => any) => (event: MouseEvent) => {
      originEvent?.(event);
      setState(false);
    };
  const el = cloneElement(element, {
    onMouseEnter: mouseEnter(element.props.onMouseEnter),
    onMouseLeave: mouseLeave(element.props.onMouseLeave),
  });
  return [el, state];
}
