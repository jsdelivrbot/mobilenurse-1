import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import AuthReducer from './reducerAuth';
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  auth: AuthReducer
});

export default rootReducer;
