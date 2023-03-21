import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { LoginModal } from 'features/auth-by-username';
import { getUserAuthData, userActions } from 'entities/user';

import { cn } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/components/button';

import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState<boolean>(false);

  const authData = useSelector(getUserAuthData);

  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
    setShowModal(false);
  }, [dispatch]);

  return (
    <div className={cn(styles.navbar, {}, [className])}>
      {!authData ? (
        <>
          <Button theme={ButtonTheme.CLEAN} onClick={handleShowModal}>
            {t('signIn')}
          </Button>
          <LoginModal isOpen={showModal} onClose={handleCloseModal} />
        </>
      ) : (
        <Button theme={ButtonTheme.CLEAN} onClick={handleLogout}>
          {t('logout')}
        </Button>
      )}
    </div>
  );
};
