import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/components/button';
import { Text } from 'shared/components/text';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';

import { profileActions, updateProfileData } from 'entities/profile';

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
    </div>
  );
};
