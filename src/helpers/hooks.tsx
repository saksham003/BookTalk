import { RefObject, useEffect, useRef } from "react";

export const useDebounce = (
  callback: () => void,
  delay: number,
  dependency: any
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (dependency === null || delay === 0) {
      return;
    }

    const timeout = setTimeout(callbackRef.current, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [dependency, delay]);
};

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callbackRef.current();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
