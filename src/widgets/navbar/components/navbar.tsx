import { useCallback, useState, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { LoginModal } from 'features/auth-by-username';
import { getUserAuthData, userActions } from 'entities/user';

import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { Button } from 'shared/components/button';

import styles from './navbar.module.scss';

export const Navbar = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

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
    <div className={styles.navbar}>
      {!authData ? (
        <>
          <Button theme="clean" onClick={handleShowModal}>
            {t('signIn')}
          </Button>
          {showModal && (
            <LoginModal isOpen={showModal} onClose={handleCloseModal} />
          )}
        </>
      ) : (
        <Button theme="clean" onClick={handleLogout}>
          {t('logout')}
        </Button>
      )}
    </div>
  );
});
