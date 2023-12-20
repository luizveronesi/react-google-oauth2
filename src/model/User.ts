type User = {
  name: string;
  email: string;
  picture: string;
  iss?: string;
  azp?: string;
  aud?: string;
  sub?: string;
  hd?: string;
  email_verified?: boolean;
  nbf?: number;
  given_name?: string;
  family_name?: string;
  locale?: string;
  iat?: number;
  exp?: number;
  jti?: string;
};

export const EMPTY_USER = {
  name: '',
  email: '',
  picture: '',
};

export default User;
