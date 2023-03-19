import { FC, ReactNode, useEffect, useCallback, useState } from 'react';

import { cn } from 'shared/lib';
import { Portal } from 'shared/components/portal';

import styles from './modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  lazy?: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  lazy,
  onClose,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const onEscapeClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', onEscapeClose);
    } else {
      window.removeEventListener('keydown', onEscapeClose);
    }
  }, [handleClose, isOpen]);

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div
        className={cn(styles.modal, { [styles.modal_open]: isOpen }, [
          className,
        ])}
      >
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
