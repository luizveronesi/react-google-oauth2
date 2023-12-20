import User from '@/model/User';

export type UserStore = {
  logged: User;
};

export type StoreAction = {
  type: string;
  payload?: User;
};

export const types = {
  LOGGED: 'LOGGED',
};
