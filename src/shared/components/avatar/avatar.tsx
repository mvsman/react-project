import { CSSProperties, useMemo } from 'react';

import { cn } from 'shared/lib';

import styles from './avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  isCircle?: boolean;
  size?: number;
}

export const Avatar = ({
  className,
  src,
  alt = '',
  isCircle = false,
  size = 100,
}: AvatarProps) => {
  const sizes = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return (
    <img
      className={cn(styles.avatar, { [styles.circle]: isCircle }, [className])}
      style={sizes}
      src={src}
      alt={alt}
    />
  );
};
