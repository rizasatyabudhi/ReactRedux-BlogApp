import { combineReducers } from 'redux';
import { Reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';


const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
});

export default rootReducer;
