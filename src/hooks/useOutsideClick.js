import { useEffect, useCallback } from "react";

export default function useOutsideClick(close, ref) {
  const handleOutsideClick = useCallback((e) => {
    if (ref.current && !ref.current.contains(e.target)) close();
  });

  useEffect(
    function () {
      document.addEventListener("click", handleOutsideClick, true);
      return () => {
        document.removeEventListener("click", handleOutsideClick, true);
      };
    },
    [close, ref]
  );

  return null;
}
