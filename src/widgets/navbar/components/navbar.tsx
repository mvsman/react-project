import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/components/button';
import { Modal } from 'shared/components/modal';

import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [modal, setModal] = useState<boolean>(false);

  const handleToggleModal = useCallback(() => {
    setModal((p) => !p);
  }, []);

  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAN} onClick={handleToggleModal}>
        {t('signIn')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={modal} onClose={handleToggleModal}>
        Modal content
      </Modal>
    </div>
  );
};
