import { MutableRefObject, useCallback, useRef } from 'react';

export const useDebounce = <T>(
  callback: (...args: T[]) => void,
  ms: number
) => {
  const timer = useRef(null) as MutableRefObject<any>;

  return useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, ms);
    },
    [callback, ms]
  );
};
