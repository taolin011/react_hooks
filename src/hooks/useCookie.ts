import Cookies from "js-cookie";
import { useCallback, useState } from "react";
export default function useCookie(
  cookieName: string
): [
  string | null,
  (newValue: string, options?: Cookies.CookieAttributes) => void,
  () => void,
] {
  const [value, setValue] = useState(() => Cookies.get(cookieName) || null);
  const deleteCookie = useCallback(() => {
    Cookies.remove(cookieName);
    setValue(null);
  }, [cookieName]);
  const updateCookie = useCallback(
    (newValue: string, options?: Cookies.CookieAttributes) => {
      Cookies.set(cookieName, newValue, options);
      setValue(newValue);
    },
    [cookieName]
  );
  return [value, updateCookie, deleteCookie];
}
