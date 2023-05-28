/* eslint-disable function-paren-newline */
import { MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from 'app/providers/store-provider';
import { cn } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/use-infinite-scroll';
import { useThrottle } from 'shared/lib/hooks/use-throttle';

import { getPageScrollPosition } from '../model/selectors';
import { pageActions } from '../model/slices/page-slice';
import styles from './page.module.scss';

interface PageProps {
  children: ReactNode;
  className?: string;
  onScrollEnd?: () => void;
}

export const Page = ({ children, className, onScrollEnd }: PageProps) => {
  const dispatch = useAppDispatch();
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { pathname: path } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getPageScrollPosition(state, path)
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, [scrollPosition]);

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      pageActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path,
      })
    );
  }, 1000);

  return (
    <section
      ref={wrapperRef}
      className={cn(styles.page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd ? <div className={styles.trigger} ref={triggerRef} /> : null}
    </section>
  );
};
