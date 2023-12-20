import User, { EMPTY_USER } from '@/model/User';

const ACCESS_TOKEN = '@Tycho:token';
const LOGGED_USER = '@Tycho:user';
const REDIRECT_URI = '@Tycho:redirectUri';

export const StorageTokens = {
  ACCESS_TOKEN,
  LOGGED_USER,
  REDIRECT_URI,
};

function getRedirectUri() {
  return localStorage.getItem(StorageTokens.REDIRECT_URI) || '/';
}

function setRedirectUri(uri: string) {
  localStorage.setItem(StorageTokens.REDIRECT_URI, uri);
}

function removeRedirectUri() {
  localStorage.removeItem(StorageTokens.REDIRECT_URI);
}

function getSessionToken() {
  return localStorage.getItem(StorageTokens.ACCESS_TOKEN);
}

function setSessionToken(token: string) {
  localStorage.setItem(StorageTokens.ACCESS_TOKEN, token);
}

function removeSessionToken() {
  localStorage.removeItem(StorageTokens.ACCESS_TOKEN);
}

function setUser(user: User) {
  localStorage.setItem(StorageTokens.LOGGED_USER, btoa(JSON.stringify(user)));
}

const getUser = (): User => {
  const strUser = localStorage.getItem(StorageTokens.LOGGED_USER);

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    if (strUser) return JSON.parse(atob(strUser));
  } catch (e) {
    Storage.removeUser();
  }

  return EMPTY_USER;
};

function removeUser() {
  localStorage.removeItem(StorageTokens.LOGGED_USER);
}

const Storage = {
  setUser,
  getUser,
  removeUser,
  setSessionToken,
  removeSessionToken,
  getSessionToken,
  getRedirectUri,
  setRedirectUri,
  removeRedirectUri,
};

export default Storage;
