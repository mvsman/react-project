import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button } from 'shared/components/button';
import { Text } from 'shared/components/text';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';

import {
  profileActions,
  updateProfileData,
  getProfileData,
} from 'entities/profile';
import { getUserAuthData } from 'entities/user';

import styles from './profile-page-header.module.scss';

interface ProfilePageHeaderProps {
  readonly?: boolean;
  canSave?: boolean;
}

export const ProfilePageHeader = ({
  readonly,
  canSave,
}: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={styles.header}>
      <Text title={t('profile')} className={styles.title} />
      {canEdit && (
        <>
          {readonly ? (
            <Button theme="background" onClick={handleEdit}>
              {t('edit')}
            </Button>
          ) : (
            <Button theme="background" onClick={handleCancelEdit}>
              {t('cancel')}
            </Button>
          )}
          {canSave && (
            <Button onClick={handleSave} className={styles.save}>
              {t('save')}
            </Button>
          )}
        </>
      )}
    </div>
  );
};
