import { MutableRefObject, ReactNode, useRef } from 'react';
import { cn } from 'shared/lib';
import { useInfiniteScroll } from 'shared/lib/hooks/use-infinite-scroll';
import styles from './page.module.scss';

interface PageProps {
  children: ReactNode;
  className?: string;
  onScrollEnd?: () => void;
}

export const Page = ({ children, className, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={cn(styles.page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
