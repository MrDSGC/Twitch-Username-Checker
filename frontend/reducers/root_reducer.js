import {combineReducers} from 'redux';
import channelsReducer from './channels_reducer.js'


export default combineReducers({
  channel: channelsReducer
});
