import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const setUserLoading = boolean => ({
  type: UserActionTypes.SET_USER_LOADING,
  payload: boolean
});