import { CSSProperties, memo, useMemo } from 'react';
import { cn } from 'shared/lib';
import styles from './skeleton.module.scss';

interface SekeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

export const Skeleton = memo(
  ({ className, height = 100, width = 100, borderRadius }: SekeletonProps) => {
    const propStyles = useMemo<CSSProperties>(
      () => ({
        width,
        height,
        borderRadius,
      }),
      [width, height, borderRadius]
    );

    return (
      <div
        className={cn(styles.skeleton, {}, [className])}
        style={propStyles}
      />
    );
  }
);
