import { combineReducers } from 'redux';
import member from './member';
import exercise from './exercise';

export default combineReducers({
  member, exercise,
});
