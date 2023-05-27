import {METHODS} from '../api/restClient';
import {USER_LOGIN} from '../urls';
import {client} from '../api/restClient';
import qs from 'qs';

export const userLoginService = async (username: string, password: string) => {
  let headerConfig = {
    'content-Type': 'application/x-www-form-urlencoded',
  };
  // username: 'jj@abtrac.com',
  // password: '@btr@cW3b',
  let body = {
    username: username,
    password: password,
    grant_type: 'password',
  };

  return await client.API(
    METHODS.POST,
    USER_LOGIN,
    qs.stringify(body),
    headerConfig,
  );
};
