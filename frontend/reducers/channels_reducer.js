import merge from 'lodash/merge';
import RECEIVE_CHANNELS from '../actions/twitch_actions'

const initialState =  [];

const ChannelsReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case 'RECEIVE_CHANNELS':
      return action.channels.channels;
    default:
      return state;
  }
};

export default ChannelsReducer;
