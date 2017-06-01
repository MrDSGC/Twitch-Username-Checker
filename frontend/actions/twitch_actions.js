import * as APIUtil from '../util/twitch_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const fetchChannel = (query) => dispatch => (
  APIUtil.queryChannel(query)
    .then(channel => dispatch(receiveChannel(channel)))
);
