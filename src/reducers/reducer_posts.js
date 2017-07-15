import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
     // our payload data is an array of object [ {postName: "hehe", ID:1 } , {post:"goodbye",ID:2}]
     // we want to change it into object with a key of the id { "1":{postName:"hehe","ID:1"}}
     // we use lodash library, mapKeys ,
     // the first argument is the array , the second argument is the element that we want to create into a key
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}

