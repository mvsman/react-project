import { useTranslation } from 'react-i18next';

import { cn } from 'shared/lib';
import { Input } from 'shared/components/input';
import { Text } from 'shared/components/text';
import { Loader } from 'shared/components/loader';
import { Avatar } from 'shared/components/avatar';

import { Currency, CurrencySelect } from 'entities/currency';
import { Country, CountrySelect } from 'entities/country';
import { Profile } from '../../model/types/profile';

import styles from './profile-card.module.scss';

interface ProfileCardProps {
  profile?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeName: (name: string) => void;
  onChangeLastname: (lastname: string) => void;
  onChangeAge: (age: string) => void;
  onChangeCity: (city: string) => void;
  onChangeUsername: (username: string) => void;
  onChangeAvatar: (avatar: string) => void;
  onChangeCurrency: (currency: Currency) => void;
  onChangeCountry: (country: Country) => void;
}

export const ProfileCard = ({
  profile,
  isLoading,
  error,
  readonly,
  onChangeName,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={cn(styles.card, {}, [styles.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(styles.card, {}, [styles.error])}>
        <Text
          title={t('error.title')}
          text={t('error.text')}
          theme="error"
          align="center"
        />
      </div>
    );
  }

  return (
    <div className={cn(styles.card, { [styles.editing]: !readonly })}>
      <div className={styles.body}>
        <Avatar
          className={styles.avatar}
          src={profile?.avatar}
          size={120}
          isCircle
        />
        <Input
          name="name"
          label={t('form.name')}
          value={profile?.name}
          readonly={readonly}
          onChange={onChangeName}
        />
        <Input
          name="lastname"
          label={t('form.lastname')}
          value={profile?.lastname}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          type="number"
          min={1}
          name="age"
          label={t('form.age')}
          value={profile?.age}
          readonly={readonly}
          onChange={onChangeAge}
        />
        <Input
          name="city"
          label={t('form.city')}
          value={profile?.city}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          name="username"
          label={t('form.username')}
          value={profile?.username}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          name="avatar"
          label={t('form.avatar')}
          value={profile?.avatar}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          value={profile?.currency}
          readonly={readonly}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          value={profile?.country}
          readonly={readonly}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};
