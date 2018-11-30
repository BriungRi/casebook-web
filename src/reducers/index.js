import {
  LOGIN,
  UPDATE_ALL_USERS,
  UPDATE_FOLLOWING,
  LOGOUT,
  UPDATE_POSTS,
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  UPDATE_POST_TITLE,
  UPDATE_POST_TEXT
} from "./../actions";

const initialState = {
  loggedIn: false,
  username: "",
  password: "",
  postTitle: "",
  postText: "",
  posts: [],
  allUsers: [],
  following: []
};

function app(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        password: "",
        following: []
      };
    case LOGOUT:
      return initialState;
    case UPDATE_ALL_USERS:
      return {
        ...state,
        allUsers: action.users
      };
    case UPDATE_FOLLOWING:
      return {
        ...state,
        following: action.following
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    case UPDATE_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case UPDATE_POST_TITLE:
      return {
        ...state,
        postTitle: action.postTitle
      };
    case UPDATE_POST_TEXT:
      return {
        ...state,
        postText: action.postText
      };
    default:
      return state;
  }
}

export default app;
