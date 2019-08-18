// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';

export default function createRootReducer(history: History) {
<<<<<<< HEAD
  return combineReducers({
=======
  return combineReducers<{}, *>({
>>>>>>> correct typo in CheckBuildsExist script to match main function name (#2221)
    router: connectRouter(history),
    counter
  });
}
