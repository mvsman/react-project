import { useEffect } from 'react';

import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from 'entities/profile';
import { DynamicReducerLoader, ReducersList } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';

const usedReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicReducerLoader reducers={usedReducers}>
      <div>
        <ProfileCard />
      </div>
    </DynamicReducerLoader>
  );
};

export default ProfilePage;
