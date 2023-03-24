import { profileReducer } from 'entities/profile';
import { useTranslation } from 'react-i18next';
import { DynamicModule, ReducersList } from 'shared/lib';

const usedReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <DynamicModule reducers={usedReducers}>
      <div>{t('profile')}</div>
    </DynamicModule>
  );
};

export default ProfilePage;
