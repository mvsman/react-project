import { memo, useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { DynamicReducerLoader, ReducersList } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { Page } from 'widgets/page';
import { Text } from 'shared/components/text';

import {
  fetchProfileData,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from 'entities/profile';
import {
  getProfileDirty,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  getProfileValidateErrors,
} from 'entities/profile/model/selectors';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';

import { ProfilePageHeader } from './profile-page-header/profile-page-header';

const usedReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const dirty = useSelector(getProfileDirty);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorsTranslates = useMemo(
    () => ({
      [ValidateProfileError.INCORRECT_NAME]: t('validateErrors.incorrectName'),
      [ValidateProfileError.INCORRECT_LASTNAME]: t(
        'validateErrors.incorrectLastname'
      ),
      [ValidateProfileError.INCORRECT_AGE]: t('validateErrors.incorrectAge'),
      [ValidateProfileError.INCORRECT_CITY]: t('validateErrors.incorrectCity'),
      [ValidateProfileError.INCORRECT_USERNAME]: t(
        'validateErrors.incorrectUsername'
      ),
      [ValidateProfileError.NO_DATA]: t('validateErrors.noData'),
      [ValidateProfileError.SERVER_ERROR]: t('validateErrors.serverError'),
    }),
    [t]
  );

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      if (id) {
        dispatch(fetchProfileData(id));
      }
    }
  }, [dispatch, id]);

  // todo: universal form handler
  const handleChangeName = useCallback(
    (name: string) => {
      dispatch(profileActions.updateProfile({ name }));
    },
    [dispatch]
  );

  const handleChangeLastname = useCallback(
    (lastname: string) => {
      dispatch(profileActions.updateProfile({ lastname }));
    },
    [dispatch]
  );

  const handleChangeAge = useCallback(
    (age: string) => {
      dispatch(profileActions.updateProfile({ age: Number(age) }));
    },
    [dispatch]
  );

  const handleChangeCity = useCallback(
    (city: string) => {
      dispatch(profileActions.updateProfile({ city }));
    },
    [dispatch]
  );

  const handleChangeUsername = useCallback(
    (username: string) => {
      dispatch(profileActions.updateProfile({ username }));
    },
    [dispatch]
  );

  const handleChangeAvatar = useCallback(
    (avatar: string) => {
      dispatch(profileActions.updateProfile({ avatar }));
    },
    [dispatch]
  );

  const handleChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const handleChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicReducerLoader reducers={usedReducers}>
      <Page>
        <ProfilePageHeader readonly={readonly} canSave={dirty} />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              key={err}
              theme="error"
              text={validateErrorsTranslates[err]}
            />
          ))}
        <ProfileCard
          profile={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeName={handleChangeName}
          onChangeLastname={handleChangeLastname}
          onChangeAge={handleChangeAge}
          onChangeCity={handleChangeCity}
          onChangeUsername={handleChangeUsername}
          onChangeAvatar={handleChangeAvatar}
          onChangeCurrency={handleChangeCurrency}
          onChangeCountry={handleChangeCountry}
        />
      </Page>
    </DynamicReducerLoader>
  );
};

export default memo(ProfilePage);
