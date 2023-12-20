import User from '@/model/User';
import { StoreAction, types } from './types';

export const logged = (data: User): StoreAction => ({
  type: types.LOGGED,
  payload: data,
});
