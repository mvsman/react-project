import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileData } from 'entities/profile/model/selectors';

import { Button, ButtonTheme } from 'shared/components/button';
import { Input } from 'shared/components/input';
import { Text } from 'shared/components/text';

import styles from './profile-card.module.scss';

export const ProfileCard = () => {
  const { t } = useTranslation('profile');
  const profile = useSelector(getProfileData);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Text title={t('profile')} />
        <Button className={styles.editButton} theme={ButtonTheme.BACKGROUND}>
          {t('edit')}
        </Button>
      </div>
      <div className={styles.body}>
        <Input label={t('name')} value={profile?.name} />
        <Input label={t('lastname')} value={profile?.lastname} />
      </div>
    </div>
  );
};
