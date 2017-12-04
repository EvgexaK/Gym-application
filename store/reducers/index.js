import { combineReducers } from 'redux';
import member from './member';
import exercise from './exercise';
import equipment from './equipment';

export default combineReducers({
  member,
  exercise,
  equipment,
});
