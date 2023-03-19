import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/auth-by-username';

import { cn } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/components/button';

import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAN} onClick={handleShowModal}>
        {t('signIn')}
      </Button>
      <LoginModal isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
};
