import AuthContext from '@/configs/AuthContext';
import Storage from '@/configs/Storage';
import { logged } from '@/configs/store/actions';
import { EMPTY_USER } from '@/model/User';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    Storage.removeUser();
    Storage.removeSessionToken();
    dispatch(logged(EMPTY_USER));
    navigate('/');
  });

  return null;
}
