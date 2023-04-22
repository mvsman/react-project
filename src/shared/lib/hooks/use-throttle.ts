import { useCallback, useEffect, useRef } from 'react';

export const useThrottle = <T>(
  callback: (...args: T[]) => void,
  ms: number
) => {
  const throttleRef = useRef(false);
  const timeoutRef = useRef<any>(null);

  const throttledCallback = useCallback(
    (...args) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        timeoutRef.current = setTimeout(() => {
          throttleRef.current = false;
        }, ms);
      }
    },
    [callback, ms]
  );

  useEffect(
    () => () => {
      clearTimeout(timeoutRef.current);
    },
    []
  );

  return throttledCallback;
};
