import merge from 'lodash/merge';
import RECEIVE_USER from '../actions/twitch_actions'

const initialState =  [];

const UserReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case 'RECEIVE_USER':
      return action.user.users
    default:
      return state;
  }
};

export default UserReducer;
