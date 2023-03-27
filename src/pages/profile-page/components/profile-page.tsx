import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { DynamicReducerLoader, ReducersList } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';

import {
  fetchProfileData,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/profile';
import {
  getProfileDirty,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
} from 'entities/profile/model/selectors';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';

import { ProfilePageHeader } from './profile-page-header/profile-page-header';

const usedReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const dirty = useSelector(getProfileDirty);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

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
      <div>
        <ProfilePageHeader readonly={readonly} canSave={dirty} />
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
      </div>
    </DynamicReducerLoader>
  );
};

export default ProfilePage;
