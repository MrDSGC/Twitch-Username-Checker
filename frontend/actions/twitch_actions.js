import * as APIUtil from '../util/twitch_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const fetchChannels = (query) => dispatch => (
  APIUtil.queryChannel(query)
    .then(channel => dispatch(receiveChannels(channel)))
);
