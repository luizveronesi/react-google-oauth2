import Storage from '@/configs/Storage';
import { logged } from '@/configs/store/actions';
import User from '@/model/User';
import { useContext, useEffect } from 'react';
import AuthContext from './AuthContext';

const useLoggedUser = (): User => {
  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    if (state.logged.email) return;

    const localUser = Storage.getUser();
    if (localUser != null) dispatch(logged(localUser));
  }, []);

  return state.logged.email ? state.logged : Storage.getUser();
};

export default useLoggedUser;
