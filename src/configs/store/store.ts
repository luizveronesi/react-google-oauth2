import { EMPTY_USER } from '@/model/User';
import { UserStore } from './types';

const store: UserStore = {
  logged: EMPTY_USER,
};

export default store;
