import logo from '@/assets/logo.png';
import AuthContext from '@/configs/AuthContext';
import Storage from '@/configs/Storage';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import User from '@/model/User';
import { logged } from '@/configs/store/actions';

export default function Login() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const parseJwt = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(payload) as User;
  };

  const onSuccess = (res: any) => {
    const user = parseJwt(res.credential);

    // set at local session storage, used only to login
    Storage.setSessionToken(res.credential);
    Storage.setUser(user);

    // add the user to reducer store, this is the one used at the components
    dispatch(logged(user));

    navigate(Storage.getRedirectUri());
    Storage.removeRedirectUri();
  };

  const onFailure = () => {
    console.log('error');
  };

  useEffect(() => {
    if (Storage.getSessionToken()) {
      onSuccess({ credential: Storage.getSessionToken() });
    }
  }, []);

  return (
    <div className="box-container">
      <div className="box">
        <img src={logo} />
        <h1 className="h4 text-gray-900 mb-4">Login using Google OAuth2</h1>
        <div className="google-login">
          <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_KEY}>
            <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
}
