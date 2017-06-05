import * as APIUtil from '../util/twitch_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = (query) => dispatch => (
  APIUtil.queryUser(query)
    .then(user => dispatch(receiveUser(user)))
);
